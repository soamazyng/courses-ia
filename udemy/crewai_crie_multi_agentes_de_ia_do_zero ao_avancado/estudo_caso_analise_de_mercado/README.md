# Estudo de Caso: Análise de Mercado com CrewAI

Este projeto implementa um sistema de análise de mercado utilizando múltiplos agentes de IA com a biblioteca CrewAI.

## Configuração do Ambiente

### Pré-requisitos
- Python 3.12+
- pip

### Instalação

1. **Clone o repositório** (se aplicável)

2. **Crie e ative o ambiente virtual:**
```bash
python3 -m venv venv
source venv/bin/activate  # No macOS/Linux
# ou
venv\Scripts\activate  # No Windows
```

3. **Instale as dependências:**
```bash
pip install -r requirements.txt
```

## Bibliotecas Instaladas

- **crewai**: Framework principal para criação de agentes de IA
- **crewai_tools**: Ferramentas adicionais para o CrewAI
- **langchain_community**: Integração com LangChain para LLMs
- **ipykernel**: Kernel Python para Jupyter
- **python-dotenv**: Gerenciamento de variáveis de ambiente
- **jupyter**: Ambiente de desenvolvimento interativo
- **pdfkit**: Geração de PDFs
- **markdown**: Processamento de markdown

## Estrutura do Projeto

```
estudo_caso_analise_de_mercado/
├── venv/                    # Ambiente virtual Python
├── requirements.txt          # Dependências do projeto
├── .env                     # Variáveis de ambiente (não versionado)
├── .gitignore              # Arquivos ignorados pelo Git
├── analise_mercado.ipynb   # Notebook principal do projeto
└── README.md               # Este arquivo
```

## Configuração de Variáveis de Ambiente

O projeto utiliza um arquivo `.env` para armazenar chaves de API e outras configurações sensíveis:

```bash
OPENAI_API_KEY=sua_chave_api_aqui
```

**⚠️ Importante:** O arquivo `.env` está no `.gitignore` para proteger informações sensíveis. Nunca commite este arquivo no repositório.

## Uso

Para ativar o ambiente virtual:
```bash
source venv/bin/activate
```

Para desativar o ambiente virtual:
```bash
deactivate
```

## Desenvolvimento

Este projeto está configurado para desenvolvimento de sistemas de análise de mercado utilizando agentes de IA colaborativos com CrewAI. 