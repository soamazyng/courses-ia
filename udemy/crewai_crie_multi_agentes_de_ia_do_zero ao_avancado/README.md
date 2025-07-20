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
├── README.md                    # Este arquivo
├── requirements.txt             # Dependências do projeto
├── .gitignore                  # Arquivos ignorados pelo Git
├── env.example                 # Exemplo de variáveis de ambiente
├── projetos/                   # Projetos desenvolvidos no curso
│   ├── projeto_01_basico/     # Primeiro projeto - Introdução
│   ├── projeto_02_intermediario/ # Segundo projeto - Múltiplos agentes
│   ├── projeto_03_avancado/   # Terceiro projeto - Sistemas avançados
│   └── projeto_final/         # Projeto final - Aplicação completa
├── exemplos/                   # Exemplos práticos
│   ├── agentes_simples/       # Exemplos de agentes básicos
│   ├── coordenacao_agentes/   # Exemplos de coordenação
│   └── casos_uso_reais/       # Casos de uso práticos
└── docs/                      # Documentação
    ├── conceitos/             # Conceitos teóricos
    └── referencias/           # Referências e links úteis
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
cp env.example .env
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

Crie um arquivo `.env` na raiz do projeto baseado no `env.example`:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4
OPENAI_TEMPERATURE=0.7

# Anthropic API (opcional)
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Google API (opcional)
GOOGLE_API_KEY=your_google_api_key_here

# Configurações do Projeto
DEBUG=True
LOG_LEVEL=INFO

# Configurações do CrewAI
CREWAI_VERBOSE=True
CREWAI_MEMORY=True
```

### Dependências Principais

```txt
# CrewAI e dependências principais
crewai>=0.28.0
openai>=1.0.0
langchain>=0.1.0
langchain-openai>=0.1.0

# Utilitários
python-dotenv>=1.0.0
pydantic>=2.0.0
requests>=2.31.0

# APIs e interfaces (opcionais)
fastapi>=0.104.0
streamlit>=1.28.0
uvicorn>=0.24.0

# Ferramentas de desenvolvimento
jupyter>=1.0.0
ipython>=8.0.0

# Análise de dados (quando necessário)
pandas>=2.0.0
numpy>=1.24.0

# Logging e debugging
loguru>=0.7.0
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

### Múltiplos Agentes
```python
from crewai import Agent, Task, Crew

# Agente pesquisador
researcher = Agent(
    role='Pesquisador',
    goal='Coletar informações detalhadas sobre o tópico',
    backstory='Especialista em pesquisa com vasta experiência'
)

# Agente escritor
writer = Agent(
    role='Escritor',
    goal='Criar conteúdo baseado nas pesquisas',
    backstory='Escritor profissional especializado em conteúdo técnico'
)

# Agente revisor
reviewer = Agent(
    role='Revisor',
    goal='Revisar e melhorar o conteúdo criado',
    backstory='Editor experiente com olho crítico para qualidade'
)

# Tarefas
research_task = Task(
    description='Pesquisar sobre as últimas tendências em IA',
    agent=researcher
)

writing_task = Task(
    description='Escrever um artigo baseado na pesquisa',
    agent=writer,
    context=[research_task]
)

review_task = Task(
    description='Revisar e melhorar o artigo',
    agent=reviewer,
    context=[writing_task]
)

# Crew com múltiplos agentes
crew = Crew(
    agents=[researcher, writer, reviewer],
    tasks=[research_task, writing_task, review_task]
)

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

### ✅ Concluído
- [x] Configuração inicial do ambiente
- [x] Criação da estrutura do projeto
- [x] Documentação básica

### 🔄 Em Andamento
- [ ] Módulo 1: Introdução ao CrewAI
- [ ] Módulo 2: Agentes Básicos
- [ ] Módulo 3: Múltiplos Agentes
- [ ] Módulo 4: Sistemas Avançados
- [ ] Módulo 5: Projeto Final

### 📊 Estatísticas
- **Projetos Concluídos:** 0/4
- **Módulos Concluídos:** 0/5
- **Status Geral:** Em andamento ⏳

---

## 🚀 Próximos Passos

1. **Instalar dependências:** `pip install -r requirements.txt`
2. **Configurar variáveis de ambiente:** Copiar `env.example` para `.env`
3. **Começar o primeiro projeto:** Navegar para `projetos/projeto_01_basico/`
4. **Seguir o curso:** Implementar cada projeto conforme o progresso

## 📞 Suporte

- **Issues:** Use as issues do GitHub para reportar problemas
- **Discord:** [CrewAI Community](https://discord.gg/crewai)
- **Documentação:** [CrewAI Docs](https://docs.crewai.com/)

---

*Última atualização: Dezembro 2024* 