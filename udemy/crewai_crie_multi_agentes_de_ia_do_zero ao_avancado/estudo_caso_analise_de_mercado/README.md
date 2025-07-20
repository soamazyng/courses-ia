# Estudo de Caso: Análise de Mercado com CrewAI

Este projeto implementa um sistema de análise de mercado utilizando múltiplos agentes de IA com a biblioteca CrewAI. O sistema permite analisar qualquer setor de mercado de forma dinâmica e automatizada.

## 🎯 Funcionalidades Principais

### ✅ **Análise de Mercado Dinâmica**
- **Agentes Especializados**: Pesquisador, Analista e Redator
- **Análise de Qualquer Setor**: Basta especificar a variável `sector`
- **Relatórios Completos**: Resumo executivo, análise estratégica e recomendações
- **Exibição em Markdown**: Resultados formatados profissionalmente

### ✅ **Agentes Implementados**
1. **Pesquisador de Mercado**: Coleta dados sobre concorrentes, tendências e oportunidades
2. **Analista de Mercado**: Analisa dados, calcula métricas (TAM, SAM, SOM) e identifica insights
3. **Redator Especializado**: Cria relatórios executivos concisos e profissionais

### ✅ **Análises Incluídas**
- **Identificação de Mercado-Alvo**
- **Análise de Concorrência** (diretos e indiretos)
- **Tendências do Setor**
- **Comportamento do Consumidor**
- **Oportunidades de Mercado**
- **Métricas de Mercado** (TAM, SAM, SOM)
- **Análise Porter's 5 Forces**
- **Identificação de Riscos e Ameaças**
- **Estratégias de Posicionamento**
- **Cenários Futuros**

## 🚀 Configuração do Ambiente

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

## 📚 Bibliotecas Instaladas

- **crewai**: Framework principal para criação de agentes de IA
- **crewai_tools**: Ferramentas adicionais para o CrewAI
- **langchain_community**: Integração com LangChain para LLMs
- **ipykernel**: Kernel Python para Jupyter
- **python-dotenv**: Gerenciamento de variáveis de ambiente
- **jupyter**: Ambiente de desenvolvimento interativo
- **pdfkit**: Geração de PDFs
- **markdown**: Processamento de markdown

## 📁 Estrutura do Projeto

```
estudo_caso_analise_de_mercado/
├── venv/                           # Ambiente virtual Python
├── requirements.txt                 # Dependências do projeto
├── .env                            # Variáveis de ambiente (não versionado)
├── .gitignore                      # Arquivos ignorados pelo Git
├── analise_mercado.ipynb          # Notebook principal do projeto
└── README.md                       # Este arquivo
```

## 🔧 Configuração de Variáveis de Ambiente

O projeto utiliza um arquivo `.env` para armazenar chaves de API e outras configurações sensíveis:

```bash
OPENAI_API_KEY=sua_chave_api_aqui
```

**⚠️ Importante:** O arquivo `.env` está no `.gitignore` para proteger informações sensíveis. Nunca commite este arquivo no repositório.

## 🎯 Como Usar

### 1. **No Jupyter Notebook**

```bash
# Ative o ambiente virtual
source venv/bin/activate

# Inicie o Jupyter
jupyter notebook
```

**Abra o arquivo `analise_mercado.ipynb` e execute as células em sequência.**
```

### 2. **Alterando o Setor para Análise**

#### **No Notebook:**
```python
# Altere esta linha no notebook
sector = "energia renovavel"  # ou qualquer outro setor
```

#### **No Script Python:**
```python
# No arquivo test_crew_dinamico.py, altere:
sector_teste = "fintech"  # ou qualquer outro setor
```

## 📊 Setores Testados

O sistema pode analisar qualquer setor, incluindo:

- **Inteligência Artificial**
- **Energia Renovável**
- **Fintech**
- **E-commerce**
- **Saúde Digital**
- **Educação**
- **Transporte**
- **Manufatura**
- **Varejo**
- **E muito mais...**

## 🔍 Exemplo de Uso

### **1. Análise de Setor Específico**

```python
# Defina o setor
sector = "inteligencia artificial"

# Execute a análise
resultado = executar_crew(sector)

# Exiba em Markdown
exibir_resultado_markdown(resultado)
```

### **2. Teste de Múltiplos Setores**

```python
# No script test_crew_dinamico.py
testar_diferentes_setores()
```

## 📋 Saída Típica

O sistema gera relatórios completos incluindo:

### **Resumo Executivo**
- Visão geral do setor
- Principais tendências
- Oportunidades identificadas

### **Análise Estratégica**
- Métricas de mercado (TAM, SAM, SOM)
- Análise Porter's 5 Forces
- Identificação de riscos e ameaças
- Estratégias de posicionamento

### **Recomendações**
- Insights acionáveis
- Oportunidades de crescimento
- Cenários futuros

## 🛠️ Desenvolvimento

### **Estrutura dos Agentes**

```python
# Pesquisador de Mercado
pesquisador_mercado = Agent(
    role='Pesquisador de Mercado',
    goal=f'Coletar informações sobre {sector}',
    backstory=f'Especialista em {sector}...'
)

# Analista de Mercado
analista_mercado = Agent(
    role='Analista de Mercado',
    goal=f'Analisar dados de {sector}',
    backstory=f'Especialista em análise de {sector}...'
)

# Redator
redator = Agent(
    role='Redator Especializado',
    goal=f'Criar relatórios sobre {sector}',
    backstory=f'Especialista em comunicação sobre {sector}...'
)
```

### **Estrutura das Tarefas**

```python
# Tarefa do Pesquisador
tarefa_pesquisador = Task(
    description=f"""
    1. Identificar mercado-alvo do setor de {sector}
    2. Pesquisar concorrentes no setor de {sector}
    3. Coletar tendências do setor de {sector}
    ...
    """,
    agent=pesquisador_mercado
)
```

## 🎯 Próximos Passos

### **Funcionalidades Planejadas:**
- [ ] Integração com APIs de dados de mercado
- [ ] Visualizações gráficas automáticas
- [ ] Exportação para PDF
- [ ] Interface web
- [ ] Análise comparativa entre setores
- [ ] Alertas de tendências emergentes

### **Melhorias Técnicas:**
- [ ] Cache de análises anteriores
- [ ] Otimização de prompts
- [ ] Validação de dados
- [ ] Relatórios customizáveis

## 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Implemente suas mudanças
4. Teste com diferentes setores
5. Envie um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ usando CrewAI para análise de mercado inteligente** 