import docx
import os
import re

# ==========================================
# CONFIGURAÇÃO
# ==========================================
ARQUIVO_ENTRADA = "Guia_Tecnico_IDocs_SAP.docx"
ARQUIVO_SAIDA = "guia_tecnico.html"
TITULO_PAGINA = "Guia Técnico IDocs"

# HTML Template Parts
HTML_HEADER = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITULO_PAGINA}</title>
    <link rel="stylesheet" href="estilos.css">
    <style>
        body {{ overflow-y: auto !important; height: auto !important; background-color: #f8fafc; }}
        /* Ajustes para conteúdo importado */
        .doc-content p {{ line-height: 1.6; color: #334155; margin-bottom: 15px; }}
        .doc-content ul {{ padding-left: 20px; color: #334155; margin-bottom: 15px; }}
        .doc-content li {{ margin-bottom: 5px; }}
        .doc-content strong {{ color: #1e293b; }}
    </style>
</head>
<body>
    <header>
        <div class="brand">DOCUMENTAÇÃO <span>{TITULO_PAGINA}</span></div>
        <div class="header-actions">
             <a href="index.html" style="text-decoration:none; color:white; border:1px solid rgba(255,255,255,0.3); padding:5px 10px; border-radius:5px; font-size:0.8rem; font-weight:600;">🏠 Voltar ao Portal</a>
        </div>
    </header>
    <div class="workspace">
        <aside>
            <div class="tree-container">
                <div class="tree-label">Índice</div>
                <div id="sidebar-nav" style="margin-left: 0;">
                    """

HTML_MIDDLE = """                </div>
            </div>
        </aside>
        <main id="mainContent" style="padding: 40px;">
            """

HTML_FOOTER = """        </main>
    </div>
    <script>
        function scrollToSection(id) {
            const el = document.getElementById(id);
            if(el) {
                el.scrollIntoView({ behavior: 'smooth' });
                document.querySelectorAll('.node-item').forEach(i => i.classList.remove('active'));
                const navLink = document.querySelector(`a[onclick*="'${id}'"]`);
                if(navLink) navLink.classList.add('active');
            }
        }
    </script>
</body>
</html>"""

def clean_text(text):
    return text.strip()

def process_table(table):
    """Converte tabela do Word para HTML"""
    html = '<div class="table-wrapper segment-card" style="margin-top:10px; margin-bottom:20px;"><table>'
    
    # Header (assume primeira linha)
    try:
        html += '<thead><tr>'
        for cell in table.rows[0].cells:
            html += f'<th>{clean_text(cell.text)}</th>'
        html += '</tr></thead>'
        
        # Body
        html += '<tbody>'
        for row in table.rows[1:]:
            html += '<tr>'
            for cell in row.cells:
                html += f'<td>{clean_text(cell.text)}</td>'
            html += '</tr>'
        html += '</tbody></table></div>'
    except:
        html += '</table></div>'
        
    return html

def convert():
    if not os.path.exists(ARQUIVO_ENTRADA):
        print(f"[ERRO] Arquivo '{ARQUIVO_ENTRADA}' nao encontrado na pasta.")
        return

    try:
        doc = docx.Document(ARQUIVO_ENTRADA)
    except Exception as e:
        print(f"[ERRO] Falha ao abrir DOCX. Instale a lib: pip install python-docx\nDetalhe: {e}")
        return

    sidebar_html = ""
    content_html = ""
    
    current_section_id = ""
    in_card = False

    # Iterar blocos do Word
    from docx.document import Document
    from docx.text.paragraph import Paragraph
    from docx.table import Table

    def iter_block_items(parent):
        if isinstance(parent, Document):
            parent_elm = parent.element.body
        else:
            parent_elm = parent._element
        for child in parent_elm.iterchildren():
            if child.tag.endswith('p'):
                yield Paragraph(child, parent)
            elif child.tag.endswith('tbl'):
                yield Table(child, parent)

    for block in iter_block_items(doc):
        if isinstance(block, Paragraph):
            text = clean_text(block.text)
            style = block.style.name
            
            if not text: continue

            # Título 1 (Heading 1) -> Seção Principal
            if 'Heading 1' in style or 'Título 1' in style:
                if in_card: content_html += "</div></div>"
                
                safe_id = re.sub(r'[^a-zA-Z0-9]', '', text).lower()
                current_section_id = safe_id
                
                sidebar_html += f'<a href="#{safe_id}" class="node-item" onclick="scrollToSection(\'{safe_id}\')"><strong>{text}</strong></a>'
                content_html += f'<div id="{safe_id}" style="margin-bottom: 30px;"><h1 style="color:#1e293b; border-bottom:2px solid #e2e8f0; padding-bottom:10px;">{text}</h1>'
                in_card = False

            # Título 2 (Heading 2) -> Novo Card
            elif 'Heading 2' in style or 'Título 2' in style:
                if in_card: content_html += "</div></div>"
                content_html += f"""
                <div class="segment-card doc-content">
                    <div class="card-header"><div class="card-title"><h2>{text}</h2></div></div>
                    <div style="padding: 20px;">
                """
                in_card = True

            # Texto Normal
            else:
                if not in_card:
                    content_html += '<div class="segment-card doc-content"><div style="padding: 20px;">'
                    in_card = True
                
                if 'List' in style or block.style.name.startswith('List'):
                    content_html += f'<ul><li>{text}</li></ul>'
                else:
                    content_html += f'<p>{text}</p>'

        elif isinstance(block, Table):
            if not in_card:
                content_html += '<div class="segment-card doc-content"><div style="padding: 20px;">'
                in_card = True
            content_html += process_table(block)

    if in_card: content_html += "</div></div>"
    if current_section_id: content_html += "</div>"

    full_html = HTML_HEADER + sidebar_html + HTML_MIDDLE + content_html + HTML_FOOTER
    
    with open(ARQUIVO_SAIDA, "w", encoding="utf-8") as f:
        f.write(full_html)
    
    print(f"[OK] Sucesso! Arquivo '{ARQUIVO_SAIDA}' gerado.")

if __name__ == "__main__":
    convert()