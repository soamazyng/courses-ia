# 🚀 CrewAI - Sistemas Multi-Agents do Zero ao Avançado

Este repositório contém os projetos desenvolvidos durante o curso **"CrewAI: Crie Sistemas Multi-Agents do Zero ao Avançado"** da Udemy.

## 📚 Sobre o Curso

**Curso:** [CrewAI: Crie Sistemas Multi-Agents do Zero ao Avançado](https://www.udemy.com/course/crewai-crie-sistemas-multi-agents-do-zero-ao-avancado)

**Instrutor:** [Nome do Instrutor]

**Plataforma:** Udemy

## 🎯 Objetivos do Curso

- Aprender a criar sistemas multi-agentes usando CrewAI
- Desenvolver agentes especializados para diferentes tarefas
- Implementar coordenação entre múltiplos agentes
- Criar sistemas inteligentes que trabalham em conjunto
- Aplicar conceitos avançados de IA generativa

## 📁 Estrutura do Projeto

```
crewai_crie_multi_agentes_de_ia_do_zero_ao_avancado/
├── README.md
├── requirements.txt
├── .env.example
├── projetos/
│   ├── projeto_01_basico/
│   ├── projeto_02_intermediario/
│   ├── projeto_03_avancado/
│   └── projeto_final/
├── exemplos/
│   ├── agentes_simples/
│   ├── coordenacao_agentes/
│   └── casos_uso_reais/
└── docs/
    ├── conceitos/
    └── referencias/
```

## 🛠️ Tecnologias Utilizadas

- **Python** - Linguagem principal
- **CrewAI** - Framework para sistemas multi-agentes
- **OpenAI API** - Modelos de linguagem
- **LangChain** - Integração com LLMs
- **FastAPI** - APIs (quando necessário)
- **Streamlit** - Interfaces web (quando necessário)

## 🚀 Como Começar

### Pré-requisitos

- Python 3.8+
- pip (gerenciador de pacotes Python)
- Conta na OpenAI (para API key)

### Instalação

1. **Clone o repositório:**
```bash
git clone [URL_DO_REPOSITORIO]
cd crewai_crie_multi_agentes_de_ia_do_zero_ao_avancado
```

2. **Crie um ambiente virtual:**
```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

3. **Instale as dependências:**
```bash
pip install -r requirements.txt
```

4. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
# Edite o arquivo .env com suas chaves de API
```

## 📋 Projetos do Curso

### 🎯 Projeto 1: Introdução ao CrewAI
- **Objetivo:** Criar o primeiro agente básico
- **Conceitos:** Configuração inicial, agente simples, tarefas básicas
- **Arquivos:** `projetos/projeto_01_basico/`

### 🎯 Projeto 2: Múltiplos Agentes
- **Objetivo:** Coordenar múltiplos agentes especializados
- **Conceitos:** Crew, coordenação, especialização de agentes
- **Arquivos:** `projetos/projeto_02_intermediario/`

### 🎯 Projeto 3: Sistemas Avançados
- **Objetivo:** Implementar sistemas complexos com múltiplos crews
- **Conceitos:** Hierarquia de agentes, workflows complexos
- **Arquivos:** `projetos/projeto_03_avancado/`

### 🎯 Projeto Final: Aplicação Real
- **Objetivo:** Desenvolver uma aplicação completa usando CrewAI
- **Conceitos:** Integração com APIs, interface de usuário, deploy
- **Arquivos:** `projetos/projeto_final/`

## 📖 Conceitos Aprendidos

### Fundamentos
- [ ] Introdução ao CrewAI
- [ ] Configuração do ambiente
- [ ] Criação de agentes básicos
- [ ] Definição de tarefas

### Intermediário
- [ ] Coordenação entre agentes
- [ ] Especialização de agentes
- [ ] Criação de crews
- [ ] Gerenciamento de contexto

### Avançado
- [ ] Hierarquia de agentes
- [ ] Workflows complexos
- [ ] Integração com APIs externas
- [ ] Otimização de performance

## 🔧 Configuração de Ambiente

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# OpenAI API
OPENAI_API_KEY=sua_chave_api_aqui

# Outras APIs (se necessário)
ANTHROPIC_API_KEY=sua_chave_anthropic
GOOGLE_API_KEY=sua_chave_google

# Configurações do projeto
DEBUG=True
LOG_LEVEL=INFO
```

### Dependências Principais

```txt
crewai
openai
langchain
python-dotenv
fastapi
streamlit
pydantic
```

## 📝 Exemplos de Uso

### Agente Básico
```python
from crewai import Agent, Task, Crew

# Criar um agente
researcher = Agent(
    role='Pesquisador',
    goal='Encontrar informações relevantes',
    backstory='Especialista em pesquisa e análise'
)

# Definir uma tarefa
research_task = Task(
    description='Pesquisar sobre inteligência artificial',
    agent=researcher
)

# Criar um crew
crew = Crew(
    agents=[researcher],
    tasks=[research_task]
)

# Executar
result = crew.kickoff()
```

## 🤝 Contribuição

Este repositório é para fins educacionais do curso. Sinta-se livre para:

- Adicionar melhorias aos projetos
- Corrigir bugs encontrados
- Compartilhar insights e aprendizados
- Documentar novas funcionalidades

## 📚 Recursos Adicionais

### Documentação Oficial
- [CrewAI Documentation](https://docs.crewai.com/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [LangChain Documentation](https://python.langchain.com/)

### Comunidade
- [CrewAI Discord](https://discord.gg/crewai)
- [GitHub CrewAI](https://github.com/joaomdmoura/crewAI)

## 📄 Licença

Este projeto é para fins educacionais. Consulte a licença do curso original para mais detalhes.

## 👨‍💻 Autor

**Nome:** [Seu Nome]
**Curso:** CrewAI - Sistemas Multi-Agents do Zero ao Avançado
**Data:** [Data de Início]

---

## 🎓 Progresso do Curso

- [ ] Módulo 1: Introdução ao CrewAI
- [ ] Módulo 2: Agentes Básicos
- [ ] Módulo 3: Múltiplos Agentes
- [ ] Módulo 4: Sistemas Avançados
- [ ] Módulo 5: Projeto Final

**Status:** Em andamento ⏳

---

*Última atualização: [Data]* 