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

### ✅ **Exportação de Resultados**
- **📄 Markdown**: Relatórios em formato Markdown com encoding UTF-8
- **🌐 HTML**: Páginas web responsivas e estilizadas
- **📋 PDF**: Documentos PDF profissionais (requer wkhtmltopdf)
- **⏰ Timestamp**: Arquivos com data e hora automática
- **🎨 Formatação**: Layout profissional e responsivo

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
├── analise_mercado.ipynb          # Notebook principal do projeto (com exportação integrada)
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

**Abra o arquivo `analise_mercado.ipynb` e execute as células em sequência:**

1. **Células 0-4**: Análise completa de mercado
2. **Célula 5**: Carregamento das funções de exportação
3. **Célula 6**: Exportação automática dos resultados
```

### 2. **Alterando o Setor para Análise**

#### **No Notebook:**
```python
# Altere esta linha no notebook
sector = "energia renovavel"  # ou qualquer outro setor
```

### 3. **Exportando Resultados**

#### **No Notebook (Células 5 e 6):**
```python
# As funções de exportação já estão disponíveis
# Execute a célula 5 para carregar as funções
# Execute a célula 6 para exportar automaticamente
```

#### **Funções Disponíveis:**
```python
# Exportar em Markdown
arquivo_md = exportar_markdown(resultado_texto, sector)

# Exportar em HTML  
arquivo_html = exportar_html(resultado_texto, sector)

# Exportar em PDF
arquivo_pdf = exportar_pdf(resultado_texto, sector)
```

## 📊 Setores Testados

O sistema pode analisar qualquer setor, incluindo:

- **Inteligência Artificial** ✅
- **Energia Renovável**
- **Fintech**
- **E-commerce**
- **Saúde Digital**
- **Educação**
- **Transporte**
- **Manufatura**
- **Varejo**
- **E muito mais...**

**💡 Dica:** Para testar outros setores, altere a variável `sector_analisado` na célula 6 do notebook.

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

### **2. Exportação de Resultados**

```python
# Exportar em Markdown
arquivo_md = exportar_markdown(resultado_texto, sector)

# Exportar em HTML
arquivo_html = exportar_html(resultado_texto, sector)

# Exportar em PDF
arquivo_pdf = exportar_pdf(resultado_texto, sector)
```

### **3. Execução Completa**

```python
# 1. Execute as células 0-4 para análise
# 2. Execute a célula 5 para carregar funções de exportação
# 3. Execute a célula 6 para exportar automaticamente
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

### **Formatos de Exportação**
- **📄 Markdown**: Estrutura clara e legível
- **🌐 HTML**: Página web responsiva e estilizada
- **📋 PDF**: Documento profissional para impressão

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

### **Funções de Exportação**

```python
# Exportação em Markdown
exportar_markdown(resultado, sector)

# Exportação em HTML
exportar_html(resultado, sector)

# Exportação em PDF
exportar_pdf(resultado, sector)
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
- [ ] Interface web
- [ ] Análise comparativa entre setores
- [ ] Alertas de tendências emergentes
- [ ] Exportação para Excel/CSV
- [ ] Templates personalizáveis
- [ ] Relatórios automáticos por email
- [ ] Dashboard interativo
- [ ] Análise de sentimentos do mercado

### **Melhorias Técnicas:**
- [ ] Cache de análises anteriores
- [ ] Otimização de prompts
- [ ] Validação de dados
- [ ] Relatórios customizáveis
- [ ] Configuração de agentes via arquivo YAML
- [ ] Sistema de plugins para novos formatos

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

## 📈 Status do Projeto

### ✅ **Funcionalidades Implementadas:**
- [x] Sistema de agentes CrewAI
- [x] Análise dinâmica de setores
- [x] Exportação em Markdown
- [x] Exportação em HTML
- [x] Exportação em PDF
- [x] Interface Jupyter Notebook
- [x] Tratamento de erros
- [x] Encoding UTF-8
- [x] Timestamps automáticos

### 🚀 **Pronto para Uso:**
O projeto está **100% funcional** e pronto para análise de mercado em qualquer setor!

---

**Desenvolvido com ❤️ usando CrewAI para análise de mercado inteligente** 