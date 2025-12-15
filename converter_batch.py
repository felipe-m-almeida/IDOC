import re
import os
import glob
import json

# ==========================================
# CONFIGURAÇÕES
# ==========================================
IGNORAR_ARQUIVOS = ['estilos.css', 'converter_batch.py', 'converter.py', 'template', 'index.html', 'pesquisa.html', 'recover_cardinality.py', 'gerador_queries.html', 'validador.html']

# Dicionário global para acumular todos os campos do projeto
# Formato: { 'NOME_CAMPO': { 'desc': 'Descrição', 'type': 'CHAR', 'len': '10' } }
MASTER_FIELD_REPOSITORY = {}

TITLE_MAP = {
    'DOCUMENTACAO_IDOC_MATERIAL': 'MATMAS - Mestre de Materiais',
    'DOC_ARTMAS09': 'ARTMAS - Mestre de Materiais (Retail)',
    'SRVMAS01': 'SRVMAS - Mestre de Serviços',
    'dados_parceiro': 'BP - Parceiro de Negócios (JSON)',
    'DOCUMENTACAO_IDOC_CLIENTES': 'DEBMAS - Mestre de Clientes',
    'DOCUMENTACAO_IDOC_FORNECEDOR': 'CREMAS - Mestre de Fornecedores',
    'DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES': 'ADRMAS - Mestre de Endereços',
    'DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS': 'CLFMAS - Classificação e Características',
    'DOCUMENTACAO_IDOC_MATQM01': 'MATQM - Dados de Qualidade',
}

def get_clean_title(filename):
    core_name = os.path.splitext(filename)[0].replace('_Refatorado', '')
    if core_name in TITLE_MAP: return TITLE_MAP[core_name]
    clean = core_name
    for prefix in ['DOCUMENTACAO_IDOC_', 'DOC_', 'DOCUMENTACAO_']:
        if clean.startswith(prefix): clean = clean.replace(prefix, '')
    return clean.replace('_', ' ').title()

def read_file_robust(filepath):
    encodings = ['utf-8', 'cp1252', 'latin-1', 'iso-8859-1']
    for enc in encodings:
        try:
            with open(filepath, 'r', encoding=enc) as f: return f.read()
        except UnicodeDecodeError: continue
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f: return f.read()

def clean_text(text):
    if not text: return ""
    replacements = {
        'Ã§': 'ç', 'Ã£': 'ã', 'Ã©': 'é', 'Ã¡': 'á', 'Ã³': 'ó', 'ÃEq': 'í', 
        'Ãª': 'ê', 'Ãõ': 'õ', 'Ãº': 'ú', 'Ãlz': 'à', 'Ã': 'Á', '&#39;': "'"
    }
    for bad, good in replacements.items(): text = text.replace(bad, good)
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('\n', ' ').replace('\r', '').replace('&nbsp;', ' ').replace(';', ',')
    return re.sub(r'\s+', ' ', text).strip()

def collect_fields_for_master(segments):
    """Acumula campos no repositório global"""
    for seg_name, data in segments.items():
        for field in data['fields']:
            f_name = field['name']
            # Só adiciona se não existir ou se a descrição atual for melhor (maior)
            if f_name not in MASTER_FIELD_REPOSITORY:
                MASTER_FIELD_REPOSITORY[f_name] = {
                    'desc': field['desc'],
                    'type': field['type'],
                    'len': field['len']
                }
            elif len(field['desc']) > len(MASTER_FIELD_REPOSITORY[f_name]['desc']):
                MASTER_FIELD_REPOSITORY[f_name]['desc'] = field['desc']

def parse_legacy_html(content):
    segments_data = {}
    header_pattern = re.compile(r'<\s*a\s+[^>]*name\s*=\s*["\']([^"\']+)["\'][^>]*>\s*(.*?)\s*<\s*/\s*a\s*>', re.IGNORECASE | re.DOTALL)
    all_anchors = list(header_pattern.finditer(content))
    
    for i, match in enumerate(all_anchors):
        anchor_name = match.group(1).strip()
        anchor_text = match.group(2).strip()
        if any(x in anchor_name.upper() for x in ['IDOCTYPE', 'SEGMENTSTRUCT', 'INFO']) or not anchor_text: continue
        
        seg_name = anchor_text.split(':', 1)[0].strip() if ':' in anchor_text else anchor_text.strip()
        seg_desc = anchor_text.split(':', 1)[1].strip() if ':' in anchor_text else ""
        
        start_pos = match.end()
        end_pos = all_anchors[i+1].start() if i + 1 < len(all_anchors) else len(content)
        seg_content = content[start_pos:end_pos]
        
        fields = []
        field_pattern = re.compile(r'<li>\s*(?P<name>[A-Z0-9_]+)\s*:\s*(?:<b>)?(?P<desc>.*?)(?:</b>)?.*?Ctg\.dados\s+interna\s*:\s*(?P<type>[A-Z0-9]+).*?(?:comprim\.ext\.:|Comprim\.int\.:)\s*(?P<len>\d+)', re.DOTALL | re.VERBOSE | re.IGNORECASE)
        
        for f_match in field_pattern.finditer(seg_content):
            fields.append({
                'name': f_match.group('name').strip(),
                'desc': clean_text(f_match.group('desc')),
                'type': f_match.group('type').strip(),
                'len': str(int(f_match.group('len')))
            })
        if fields: segments_data[seg_name] = {'desc': clean_text(seg_desc), 'fields': fields, 'max': 1}
    
    collect_fields_for_master(segments_data)
    return segments_data

def parse_modern_html(content):
    segments_data = {}
    card_pattern = re.compile(r'<div id="([^"]+)" class="segment-card">', re.IGNORECASE)
    cards = list(card_pattern.finditer(content))
    
    for i, match in enumerate(cards):
        seg_name = match.group(1)
        start_pos = match.end()
        end_pos = cards[i+1].start() if i + 1 < len(cards) else len(content)
        card_content = content[start_pos:end_pos]

        desc_match = re.search(r'<span class="desc">(.*?)</span>', card_content)
        seg_desc = clean_text(desc_match.group(1)) if desc_match else ""
        
        max_val = 1
        max_match = re.search(r'M(?:á|a)x:\s*(\d+)', card_content)
        if max_match: max_val = int(max_match.group(1))

        fields = []
        rows = re.findall(r'<tr>(.*?)</tr>', card_content, re.DOTALL)
        for row in rows:
            name_m = re.search(r'class="tech-name"[^>]*>(.*?)</span>', row)
            tds = re.findall(r'<td.*?>(.*?)</td>', row, re.DOTALL)
            if len(tds) >= 3 and name_m:
                type_m = re.search(r'class="dt-type">(.*?)</span>', row)
                full_type = type_m.group(1) if type_m else "CHAR(0)"
                dtype, dlen = full_type.split('(') if '(' in full_type else (full_type, '0')
                fields.append({
                    'name': name_m.group(1).strip(),
                    'desc': clean_text(tds[1]),
                    'type': dtype,
                    'len': dlen.replace(')', '')
                })
        if fields: segments_data[seg_name] = {'desc': seg_desc, 'fields': fields, 'max': max_val}
    
    collect_fields_for_master(segments_data)
    return segments_data

def get_hierarchy(content, segments):
    hierarchy = []
    tree_match = re.search(r'const IDOC_TREE = (\[.*?\]);', content, re.DOTALL)
    if tree_match:
        try:
            tree_data = json.loads(tree_match.group(1))
            def flatten(nodes, level=0):
                flat = []
                for n in nodes:
                    flat.append({'name': n['segment'], 'desc': '', 'level': level})
                    if 'children' in n: flat.extend(flatten(n['children'], level + 1))
                return flat
            return flatten(tree_data)
        except: pass

    if 'class="node-item"' in content:
        link_pattern = re.compile(r'<a href="#([^"]+)" class="node-item"[^>]*style="padding-left: (\d+)px"[^>]*>', re.DOTALL)
        for match in link_pattern.finditer(content):
            padding = int(match.group(2))
            hierarchy.append({'name': match.group(1), 'desc': "", 'level': max(0, (padding - 10) // 10)})
    
    if not hierarchy:
        for name in segments: hierarchy.append({'name': name, 'desc': '', 'level': 0})
    return hierarchy

def render_card(name, data):
    is_x = name.endswith('X') or name.endswith('X1')
    badge_style = "badge-meta" if is_x else "badge-req"
    badge_text = "Técnico/Flag" if is_x else "Dados"
    rows = ""
    for f in data['fields']:
        rows += f"""<tr><td><span class="tech-name" onclick="copy(this)">{f['name']}</span></td><td>{f['desc']}</td><td><span class="dt-type">{f['type']}({f['len']})</span></td></tr>"""
    
    return f"""
    <div id="{name}" class="segment-card">
        <div class="card-header">
            <div class="card-title"><h2>{name} <span class="desc">{data['desc']}</span></h2></div>
            <div class="badges">
                <button class="btn-csv" onclick="exportToCSV('{name}')">CSV</button>
                <button class="btn-payload" onclick="openPayloadModal('{name}')">Payload</button>
                <span class="badge {badge_style}">{badge_text}</span>
                <span class="badge badge-meta">Máx: {data.get('max', 1)}</span>
                <span class="badge badge-meta">{len(data['fields'])} campos</span>
            </div>
        </div>
        <div class="table-wrapper"><table><thead><tr><th style="width: 25%">Campo</th><th style="width: 55%">Descrição</th><th style="width: 20%">Tipo/Tam</th></tr></thead><tbody>{rows}</tbody></table></div>
    </div>"""

def generate_html(segments, hierarchy, title, original_content):
    tree_script = ""
    tree_match = re.search(r'(const IDOC_TREE = \[.*?\];)', original_content, re.DOTALL)
    if tree_match:
        tree_script = f"<script>{tree_match.group(1)} const SEGMENT_DEFINITIONS = {json.dumps(segments)};</script>"
    else:
        flat_tree = [{'segment': s, 'max': segments[s].get('max',1), 'children': []} for s in segments]
        tree_script = f"<script>const IDOC_TREE = {json.dumps(flat_tree)}; const SEGMENT_DEFINITIONS = {json.dumps(segments)};</script>"

    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="estilos.css">
    {tree_script}
</head>
<body>
    <header>
        <div class="brand">{title}</div>
        <div class="search-box"><input type="text" id="searchInput" placeholder="Buscar..."></div>
        <div style="display:flex; gap:10px;">
             <button class="btn-csv" style="background:#15803d; color:white; border:none;" onclick="exportFullCSV()">CSV Completo</button>
             <button class="btn-payload" style="background:#2563eb; color:white; border:none;" onclick="openFullPayloadModal()">Payload Completo</button>
             <a href="index.html" style="text-decoration:none; color:#64748b; font-weight:600; font-size:0.9rem; align-self:center;">Voltar</a>
        </div>
    </header>
    <div class="workspace">
        <aside>
            <div class="history-container">
                <div class="history-header"><span class="history-title">Vistos Recentemente</span><button class="btn-clear-history" onclick="clearHistory()">Limpar</button></div>
                <div id="history-list" class="history-list"></div>
            </div>
            <div class="tree-container"><div class="tree-label">Navegação</div>"""
    
    for node in hierarchy:
        indent = node['level'] * 10
        html += f"""<a href="#{node['name']}" class="node-item" style="padding-left: {10 + indent}px" onclick="activateNode(this)"><strong>{node['name']}</strong></a>"""

    html += """</div></aside><main id="mainContent">"""

    processed = set()
    for node in hierarchy:
        if node['name'] in segments and node['name'] not in processed:
            html += render_card(node['name'], segments[node['name']])
            processed.add(node['name'])
    for name, data in segments.items():
        if name not in processed: html += render_card(name, data)

    html += """</main></div>
    <div id="payloadModal" class="modal-overlay"><div class="modal-container">
            <div class="modal-header"><div class="modal-title">Payload: <span id="modalSegName"></span></div><button class="modal-close" onclick="closePayloadModal()">&times;</button></div>
            <div class="payload-tabs"><div class="payload-tab active" onclick="switchTab('json')">JSON</div><div class="payload-tab" onclick="switchTab('xml')">XML</div></div>
            <div class="modal-body"><pre id="jsonContent" class="payload-content active"></pre><pre id="xmlContent" class="payload-content"></pre></div>
            <div class="modal-footer"><button class="btn-payload" onclick="copyCurrentPayload()">Copiar Código</button></div>
    </div></div>
    <div id="toast">Copiado!</div>
    <script>
        function copy(el) { navigator.clipboard.writeText(el.innerText).then(() => showToast()); }
        function showToast() { let t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000); }
        function activateNode(el) { document.querySelectorAll('.node-item').forEach(i => i.classList.remove('active')); el.classList.add('active'); }
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            let term = e.target.value.toUpperCase();
            document.querySelectorAll('.segment-card').forEach(card => {
                let show = false;
                if(card.querySelector('.card-header').innerText.toUpperCase().includes(term)) show = true;
                card.querySelectorAll('tbody tr').forEach(row => {
                    if(row.innerText.toUpperCase().includes(term)) { row.classList.remove('hidden'); show = true; } else { row.classList.add('hidden'); }
                });
                card.style.display = show ? 'block' : 'none';
            });
        });

        function exportFullCSV() {
            let csv = "Segmento;Campo;Descrição;Tipo;Tamanho\\n";
            for (const [segName, data] of Object.entries(SEGMENT_DEFINITIONS)) {
                data.fields.forEach(f => {
                    csv += `${segName};${f.name};${f.desc};${f.type};${f.len}\\n`;
                });
            }
            downloadCSV(csv, "IDoc_Completo.csv");
        }

        function exportToCSV(segName) {
            const data = SEGMENT_DEFINITIONS[segName]; if(!data) return;
            let csv = "Campo;Descrição;Tipo;Tamanho\\n";
            data.fields.forEach(f => { csv += `${f.name};${f.desc};${f.type};${f.len}\\n`; });
            downloadCSV(csv, `${segName}.csv`);
        }

        function downloadCSV(content, fileName) {
            const blob = new Blob(["\\uFEFF" + content], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        function generateFakeValue(type, name) {
            if (!type) return "texto";
            if (type.includes('NUMC') || type.includes('INT') || type.includes('DEC')) return 123;
            if (type.includes('DATS')) return "20251231";
            if (type.includes('TIMS')) return "235959";
            if (name.includes('CURRENCY') || name.includes('WAERS')) return "BRL";
            if (name.includes('LANG')) return "PT";
            return "texto";
        }
        function getSegmentData(segName) {
            const def = SEGMENT_DEFINITIONS[segName]; if (!def) return {};
            const obj = {};
            def.fields.forEach(f => { obj[f.name] = generateFakeValue(f.type, f.name); });
            return obj;
        }
        function buildFullJson(nodes) {
            const result = {};
            const nodeList = Array.isArray(nodes) ? nodes : [nodes];
            nodeList.forEach(node => {
                let content = getSegmentData(node.segment);
                if (node.children && node.children.length > 0) Object.assign(content, buildFullJson(node.children));
                if (node.max > 1) result[node.segment] = [content]; else result[node.segment] = content;
            });
            return result;
        }
        function jsonToXml(obj, depth = 0) {
            let xml = ''; const indent = '  '.repeat(depth);
            for (const key in obj) {
                const value = obj[key];
                if (Array.isArray(value)) { value.forEach(item => { xml += `${indent}<${key}>\\n` + jsonToXml(item, depth + 1) + `${indent}</${key}>\\n`; }); }
                else if (typeof value === 'object' && value !== null) { xml += `${indent}<${key}>\\n` + jsonToXml(value, depth + 1) + `${indent}</${key}>\\n`; }
                else { xml += `${indent}<${key}>${value}</${key}>\\n`; }
            }
            return xml;
        }
        function openPayloadModal(segName) {
            document.getElementById('modalSegName').innerText = segName;
            const data = getSegmentData(segName);
            document.getElementById('jsonContent').innerText = JSON.stringify(data, null, 2);
            document.getElementById('xmlContent').innerText = `<${segName}>\\n${jsonToXml(data, 1)}</${segName}>`;
            document.getElementById('payloadModal').classList.add('open');
        }
        function openFullPayloadModal() {
            document.getElementById('modalSegName').innerText = "ESTRUTURA COMPLETA";
            let fullData = {};
            if (typeof IDOC_TREE !== 'undefined' && IDOC_TREE.length > 0) fullData = buildFullJson(IDOC_TREE);
            document.getElementById('jsonContent').innerText = JSON.stringify(fullData, null, 2);
            document.getElementById('xmlContent').innerText = `<IDOC>\\n${jsonToXml(fullData, 1)}</IDOC>`;
            document.getElementById('payloadModal').classList.add('open');
        }
        function closePayloadModal() { document.getElementById('payloadModal').classList.remove('open'); }
        function switchTab(type) {
            document.querySelectorAll('.payload-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.payload-content').forEach(c => c.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById(type + 'Content').classList.add('active');
        }
        function copyCurrentPayload() { navigator.clipboard.writeText(document.querySelector('.payload-content.active').innerText).then(() => showToast()); }
        (function() {
            const MAX_HISTORY = 10;
            const HISTORY_KEY = 'sap_docs_history';
            if (!window.location.pathname.endsWith('index.html')) {
                const standardizedTitle = document.title;
                const currentPage = { title: standardizedTitle, url: window.location.pathname.split('/').pop() };
                let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
                history = history.filter(h => h.url !== currentPage.url);
                history.unshift(currentPage);
                if (history.length > MAX_HISTORY) history.pop();
                localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
                const btn = document.createElement('a'); btn.id = 'global-back-btn'; btn.href = 'index.html'; btn.innerHTML = '🏠'; btn.title = 'Voltar ao Início'; document.body.appendChild(btn);
            }
            const container = document.getElementById('history-list');
            if (container) {
                const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
                if (history.length === 0) container.innerHTML = '<div style="padding:5px 8px; font-size:0.75rem; color:#64748b;">Nenhum item recente.</div>';
                else { container.innerHTML = history.map(h => `<a href="${h.url}" class="history-link">${h.title}</a>`).join(''); }
            }
            window.clearHistory = function() { localStorage.removeItem(HISTORY_KEY); if(document.getElementById('history-list')) document.getElementById('history-list').innerHTML = ''; }
        })();
    </script>
</body>
</html>"""
    return html

# ==========================================
# EXECUÇÃO BATCH V12 (Coletor Master Data)
# ==========================================
arquivos = glob.glob("*.htm") + glob.glob("*.html")
count = 0
print(f"--- Iniciando conversão V12 (Coleta de Campos Master) ---")

for arquivo in arquivos:
    if any(ig in arquivo for ig in IGNORAR_ARQUIVOS) or arquivo.endswith('.py'): continue
    print(f"Processando: {arquivo}...")
    try:
        content = read_file_robust(arquivo)
        is_modern = 'class="segment-card"' in content
        segments = {}
        hierarchy = []

        if is_modern:
            segments = parse_modern_html(content)
            hierarchy = get_hierarchy(content, segments)
            nome_saida = arquivo 
        else:
            segments = parse_legacy_html(content)
            hierarchy = get_hierarchy(content, segments)
            nome_base = os.path.splitext(arquivo)[0]
            nome_saida = f"{nome_base}_Refatorado.html"
        
        if not segments:
            print(f"  [AVISO] Nenhum segmento encontrado. Pulando.")
            continue

        titulo = get_clean_title(os.path.basename(nome_saida))
        html_final = generate_html(segments, hierarchy, titulo, content if is_modern else "")
        
        with open(nome_saida, 'w', encoding='utf-8') as f: f.write(html_final)
        print(f"  -> Sucesso: {nome_saida}")
        count += 1
    except Exception as e:
        print(f"  [ERRO CRÍTICO] {arquivo}: {e}")

# --- ETAPA EXTRA: SALVAR MASTER DATA JS ---
print("--- Gerando arquivo de dados mestres (dados_campos.js) ---")
with open('dados_campos.js', 'w', encoding='utf-8') as f:
    f.write(f"const GLOBAL_FIELDS = {json.dumps(MASTER_FIELD_REPOSITORY, indent=2)};")
print(f"-> 'dados_campos.js' criado com {len(MASTER_FIELD_REPOSITORY)} campos únicos!")

print(f"--- Concluído. {count} arquivos gerados. ---")