import re
import os
import glob

# ==========================================
# CONFIGURAÇÕES
# ==========================================
ALVO_FERRAMENTAS = [
    'validador.html', 
    'pesquisa.html', 
    'gerador_queries.html', 
    'troubleshooting.html', 
    'arquitetura.html'
]

# Header Padrão
HEADER_PADRAO = """<header>
        <div class="brand">TITULO_PLACEHOLDER</div>
        <div class="header-actions">
             <a href="index.html" style="text-decoration:none; color:white; border:1px solid rgba(255,255,255,0.3); padding:5px 10px; border-radius:5px; font-size:0.8rem; font-weight:600;">HOME / VOLTAR</a>
        </div>
    </header>"""

def fix_navigation(filepath):
    if not os.path.exists(filepath):
        print(f"[SKIP] Arquivo nao encontrado: {filepath}")
        return

    # Tenta ler com utf-8, se falhar tenta latin-1
    try:
        with open(filepath, 'r', encoding='utf-8') as f: content = f.read()
    except:
        with open(filepath, 'r', encoding='latin-1') as f: content = f.read()

    original_len = len(content)

    # 1. REMOVER O SCRIPT DO BOTÃO FLUTUANTE (Inferior)
    # Procura por variações do código Javascript que cria o 'global-back-btn'
    # Regex explica: Procura por (function... que contenha 'global-back-btn' ... e termine com })();
    pattern_js = r'\(\s*function\s*\(\)\s*\{[^}]*global-back-btn[^}]*\}\)\(\);'
    
    # Remove também se estiver envolto em tags <script> exclusivas para ele
    pattern_script_tag = r'<script>\s*//.*Injetor.*?global-back-btn.*?</script>'
    
    content = re.sub(pattern_js, '', content, flags=re.DOTALL)
    content = re.sub(pattern_script_tag, '', content, flags=re.DOTALL | re.IGNORECASE)

    # Remove sobras de comentários
    content = content.replace('// Botão Home Flutuante', '')
    content = content.replace('// Injetor do Botão Home', '')

    # 2. DEFINIR TÍTULO BASEADO NO ARQUIVO
    titulo_ferramenta = "HUB DE FERRAMENTAS"
    if 'validador' in filepath: titulo_ferramenta = 'FERRAMENTA <span>Validador SAP</span>'
    elif 'pesquisa' in filepath: titulo_ferramenta = 'FERRAMENTA <span>Busca Global</span>'
    elif 'trouble' in filepath: titulo_ferramenta = 'FERRAMENTA <span>Troubleshooting</span>'
    elif 'arquitetura' in filepath: titulo_ferramenta = 'FERRAMENTA <span>Arquitetura</span>'
    elif 'queries' in filepath: titulo_ferramenta = 'FERRAMENTA <span>SQL Builder</span>'

    # 3. SUBSTITUIR O HEADER INTEIRO (Superior)
    # Prepara o novo header com o título correto
    novo_header = HEADER_PADRAO.replace("TITULO_PLACEHOLDER", titulo_ferramenta)

    if '<header>' in content:
        # Substitui o header existente
        content = re.sub(r'<header>.*?</header>', novo_header, content, flags=re.DOTALL)
    else:
        # Se não tem header, injeta no inicio do body
        content = content.replace('<body>', f'<body>\n{novo_header}')

    # Salva
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"[OK] Processado: {filepath}")

# ==========================================
# EXECUÇÃO
# ==========================================
print("--- Iniciando Limpeza de Botoes (V21 - Safe Mode) ---")

for arquivo in ALVO_FERRAMENTAS:
    fix_navigation(arquivo)

print("--- Fim. Verifique os arquivos. ---")