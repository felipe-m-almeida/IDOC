import re
import os
import glob

# ==========================================
# CONFIGURAÇÕES
# ==========================================
# Ignora arquivos que contenham estes termos no nome para não processar o que não deve
IGNORAR_ARQUIVOS = ['estilos.css', 'Refatorado', 'converter', 'template']

def parse_html(content):
    segments_data = {}
    hierarchy = []
    
    # 1. Extrair definições de segmentos (Header principal do segmento)
    # Padrão: <h2><A NAME = "NOME">NOME : Descrição</A></h2>
    seg_header_pattern = re.compile(r'<h2><A NAME\s*=\s*"([^"]+)">([^:]+)\s*:\s*(.*?)</A></h2>', re.IGNORECASE)
    parts = seg_header_pattern.split(content)
    
    # O split divide o conteúdo. Pulamos o índice 0 (cabeçalho do arquivo) e iteramos de 4 em 4
    for i in range(1, len(parts), 4):
        anchor_name = parts[i].strip()
        seg_name = parts[i+1].strip()
        seg_desc = parts[i+2].strip()
        seg_content = parts[i+3]
        
        fields = []
        
        # --- REGEX CORRIGIDO E ROBUSTO ---
        # Este padrão usa 're.VERBOSE' para permitir comentários e quebras de linha no regex.
        # Ele é capaz de capturar descrições que tenham quebras de linha no meio (o bug que você achou).
        field_pattern = re.compile(r"""
            <li>\s* # Início do item da lista
            (?P<name>[^\s:]+)                           # Nome do campo (captura até o primeiro espaço ou dois pontos)
            \s*:\s* # Separador ' : ' flexível
            <b>(?P<desc>.*?)</b>                        # Descrição dentro de negrito (non-greedy)
            .*?                                         # Lixo HTML no meio
            Ctg\.dados\s+interna\s*:\s*(?P<type>[A-Z0-9]+) # Tipo de dado (CHAR, DEC, etc)
            .*?                                         # Mais lixo HTML
            (?:comprim\.ext\.:|Comprim\.int\.:)\s*(?P<len>\d+) # Tamanho do campo
        """, re.DOTALL | re.VERBOSE | re.IGNORECASE)
        
        for match in field_pattern.finditer(seg_content):
            f_name = match.group('name').strip()
            
            # Limpeza pesada na descrição:
            # 1. Remove tags HTML de dentro da descrição se houver
            # 2. Transforma quebras de linha e múltiplos espaços em um único espaço
            raw_desc = match.group('desc')
            clean_desc = ' '.join(raw_desc.split()) 
            
            f_type = match.group('type').strip()
            # Remove zeros à esquerda do tamanho (ex: 000018 -> 18)
            f_len = str(int(match.group('len'))) 
            
            fields.append({
                'name': f_name, 
                'desc': clean_desc, 
                'type': f_type, 
                'len': f_len
            })
            
        segments_data[seg_name] = {
            'desc': seg_desc, 
            'fields': fields, 
            'anchor': anchor_name
        }

    # 2. Extrair Hierarquia (Sidebar)
    # Tenta achar a seção de estrutura. Se não tiver a tag exata, tenta ler o arquivo todo (fallback)
    if '<A NAME = "SEGMENTSTRUCT">' in content:
        hierarchy_section = content.split('<A NAME = "SEGMENTSTRUCT">')[0]
    else:
        hierarchy_section = content
        
    lines = hierarchy_section.split('\n')
    current_level = 0
    
    # Varredura linha a linha para montar a árvore
    for line in lines:
        # Detecta nível de indentação baseado nas tags UL
        if '<ul' in line.lower(): current_level += 1
        if '</ul' in line.lower(): current_level -= 1
            
        # Pega os itens da lista que são segmentos
        if '<li><b>' in line:
            # Regex simples para pegar Nome : Descrição da linha da árvore
            match = re.search(r'<li><b>(.*?)\s*:\s*(.*?)</b>', line)
            if match:
                s_name = match.group(1).strip()
                # Remove tags HTML que possam ter ficado na descrição
                s_desc = re.sub(r'<.*?>', '', match.group(2).strip())
                hierarchy.append({'name': s_name, 'desc': s_desc, 'level': current_level})

    return segments_data, hierarchy

def generate_html(segments, hierarchy, title):
    # Template do Cabeçalho HTML
    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <div class="brand">{title}</div>
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="Buscar campo, segmento ou descrição...">
        </div>
    </header>
    <div class="workspace">
        <aside>
            <div class="tree-container">
                <div class="tree-label">Estrutura Hierárquica</div>
    """
    
    # Geração da Sidebar (Tree View)
    last_level = 0
    for node in hierarchy:
        diff = node['level'] - last_level
        
        # Abre ou fecha divs baseado na diferença de nível
        if diff > 0: 
            html += '<div class="node">' * diff
        elif diff < 0: 
            html += '</div>' * abs(diff)
            
        html += f"""
        <a href="#{node['name']}" class="node-item" onclick="activateNode(this)">
            <strong>{node['name']}</strong>
            <span>{node['desc'][:28]}...</span>
        </a>
        """
        last_level = node['level']
    
    # Fecha as divs remanescentes
    if last_level > 0: 
        html += '</div>' * last_level

    html += """
            </div>
        </aside>
        <main id="mainContent">
    """

    # Geração dos Cards de Conteúdo
    processed = set()
    
    # 1. Renderiza primeiro os segmentos que aparecem na hierarquia (ordem lógica)
    for node in hierarchy:
        if node['name'] in segments:
            html += render_card(node['name'], segments[node['name']])
            processed.add(node['name'])
            
    # 2. Renderiza o restante (segmentos técnicos ou órfãos)
    for name, data in segments.items():
        if name not in processed:
            html += render_card(name, data)

    # Rodapé e Scripts
    html += """
        </main>
    </div>
    
    <div id="toast">Copiado!</div>
    
    <script>
        // Função de Copiar
        function copy(el) { 
            navigator.clipboard.writeText(el.innerText).then(() => { 
                let t = document.getElementById('toast'); 
                t.classList.add('show'); 
                setTimeout(() => t.classList.remove('show'), 2000); 
            }); 
        }
        
        // Ativar item na sidebar
        function activateNode(el) { 
            document.querySelectorAll('.node-item').forEach(i => i.classList.remove('active')); 
            el.classList.add('active'); 
        }
        
        // Busca em Tempo Real
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            let term = e.target.value.toUpperCase();
            document.querySelectorAll('.segment-card').forEach(card => {
                let show = false;
                
                // Verifica título do card
                if(card.querySelector('.card-header').innerText.toUpperCase().includes(term)) show = true;
                
                // Verifica linhas da tabela
                card.querySelectorAll('tbody tr').forEach(row => {
                    if(row.innerText.toUpperCase().includes(term)) {
                        row.classList.remove('hidden');
                        if(term) row.style.backgroundColor = '#fffbeb'; 
                        else row.style.backgroundColor = '';
                        show = true;
                    } else { 
                        row.classList.add('hidden'); 
                    }
                });
                
                card.style.display = show ? 'block' : 'none';
            });
        });
    </script>
</body>
</html>
    """
    return html

def render_card(name, data):
    # Lógica para estilizar badges (Flags X vs Dados Reais)
    is_x = name.endswith('X') or name.endswith('X1')
    badge_style = "badge-meta" if is_x else "badge-req"
    badge_text = "Técnico/Flag" if is_x else "Dados"
    
    # Gera as linhas da tabela
    rows = ""
    for f in data['fields']:
        rows += f"""
        <tr>
            <td><span class="tech-name" onclick="copy(this)">{f['name']}</span></td>
            <td>{f['desc']}</td>
            <td><span class="dt-type">{f['type']}({f['len']})</span></td>
        </tr>
        """
    
    return f"""
    <div id="{name}" class="segment-card">
        <div class="card-header">
            <div class="card-title">
                <h2>{name} <span class="desc">{data['desc']}</span></h2>
            </div>
            <div class="badges">
                <span class="badge {badge_style}">{badge_text}</span>
                <span class="badge badge-meta">{len(data['fields'])} campos</span>
            </div>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th style="width: 25%">Campo</th>
                        <th style="width: 55%">Descrição</th>
                        <th style="width: 20%">Tipo/Tam</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    </div>
    """

# ==========================================
# LÓGICA DE EXECUÇÃO EM LOTE (BATCH)
# ==========================================
# Pega todos arquivos .htm e .html da pasta atual
arquivos = glob.glob("*.htm") + glob.glob("*.html")
count = 0

print(f"--- Iniciando conversão em massa ---")

for arquivo in arquivos:
    # Pula arquivos ignorados ou o próprio script se tiver extensão html por engano
    if any(ig in arquivo for ig in IGNORAR_ARQUIVOS) or arquivo.endswith('.py'):
        continue
        
    print(f"Processando: {arquivo}...")
    
    try:
        # Tenta ler com utf-8, se falhar tenta latin-1 (comum em SAP antigo)
        try:
            with open(arquivo, 'r', encoding='utf-8') as f: content = f.read()
        except UnicodeDecodeError:
            with open(arquivo, 'r', encoding='latin-1') as f: content = f.read()

        segments, hierarchy = parse_html(content)
        
        if not segments:
            print(f"  [AVISO] Nenhum segmento encontrado em {arquivo}. Pulando.")
            continue

        # Define nome de saída (NomeOriginal_Refatorado.html)
        nome_base = os.path.splitext(arquivo)[0]
        nome_saida = f"{nome_base}_Refatorado.html"
        titulo = nome_base.replace('_', ' ').upper()

        html_final = generate_html(segments, hierarchy, titulo)
        
        with open(nome_saida, 'w', encoding='utf-8') as f:
            f.write(html_final)
            
        print(f"  -> Gerado com sucesso: {nome_saida}")
        count += 1
        
    except Exception as e:
        print(f"  [ERRO] Falha ao processar {arquivo}: {e}")

print(f"--- Concluído. {count} arquivos convertidos. ---")