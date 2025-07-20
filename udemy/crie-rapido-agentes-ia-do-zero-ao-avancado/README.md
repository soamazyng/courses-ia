# 🚀 Crie Rápido Agentes de IA - Do Zero ao Avançado

Este repositório contém o material e projetos desenvolvidos durante o curso **"Desenvolvimento de Agentes de IA - Do Zero ao Avançado"** da Udemy.

## 📚 Sobre o Curso

**Curso:** [Desenvolvimento de Agentes de IA - Do Zero ao Avançado](https://www.udemy.com/course/desenvolvimento-de-agentes-de-ia-do-zero-ao-avancado/)

Este curso oferece uma jornada completa no desenvolvimento de agentes de inteligência artificial, desde conceitos básicos até técnicas avançadas de implementação, com foco especial no framework CrewAI para criação de múltiplos agentes colaborativos.

## 🤖 CrewAI - Framework para Múltiplos Agentes

### O que é CrewAI?

CrewAI é um framework inovador para orquestração de múltiplos agentes de IA que trabalham em conjunto para resolver tarefas complexas. Ele permite criar sistemas onde diferentes agentes especializados colaboram de forma coordenada.

### Principais Características do CrewAI:

- **Agentes Especializados**: Cada agente pode ter uma função específica (pesquisador, analista, escritor, etc.)
- **Colaboração Inteligente**: Os agentes se comunicam e compartilham informações entre si
- **Orquestração Automática**: O framework gerencia automaticamente o fluxo de trabalho entre agentes
- **Flexibilidade**: Suporte a diferentes LLMs (Large Language Models)
- **Escalabilidade**: Fácil adição de novos agentes e tarefas

### Por que CrewAI no Curso?

O CrewAI foi escolhido como tecnologia central do curso porque:

1. **Aprendizado Prático**: Permite ver na prática como múltiplos agentes trabalham juntos
2. **Conceitos Avançados**: Demonstra técnicas modernas de IA multi-agente
3. **Aplicabilidade Real**: Usado em projetos reais de automação e análise
4. **Comunidade Ativa**: Framework em constante evolução com suporte ativo

## 📁 Projetos Desenvolvidos

### 1. 🎯 Analista de Mercado
**Localização:** `crewai_analista_de_mercado/`

**Descrição:** Sistema de análise de mercado que utiliza múltiplos agentes para:
- Pesquisar informações de mercado
- Analisar dados e tendências
- Gerar relatórios detalhados
- Identificar oportunidades de negócio

**Tecnologias Utilizadas:**
- CrewAI para orquestração de agentes
- LangChain Community para integrações
- Jupyter Notebooks para desenvolvimento
- PDF e Markdown para geração de relatórios

**Funcionalidades:**
- Agente Pesquisador: Coleta dados de mercado
- Agente Analista: Processa e analisa informações
- Agente Relator: Gera relatórios estruturados

### 2. 🧳 Planejador de Viagem
**Localização:** `crewai_planejador_de_viagem/`

**Descrição:** Sistema inteligente de planejamento de viagens que:
- Analisa preferências do usuário
- Pesquisa destinos e opções
- Cria itinerários personalizados
- Considera orçamento e tempo disponível

**Tecnologias Utilizadas:**
- CrewAI para coordenação de agentes
- Integração com APIs de viagem
- Processamento de linguagem natural
- Geração de itinerários personalizados

**Funcionalidades:**
- Agente de Pesquisa: Encontra destinos e opções
- Agente de Planejamento: Cria itinerários
- Agente de Otimização: Ajusta planos conforme restrições

## 🛠️ Stack Tecnológica

### Frameworks e Bibliotecas Principais:
- **CrewAI**: Framework principal para orquestração de agentes
- **CrewAI Tools**: Ferramentas adicionais para agentes
- **LangChain Community**: Integrações com diversos serviços
- **Jupyter**: Ambiente de desenvolvimento interativo
- **Python-dotenv**: Gerenciamento de variáveis de ambiente

### Dependências por Projeto:

#### Analista de Mercado:
```
crewai
crewai-tools
langchain_community
ipykernel
python-dotenv
jupyter
pdfkit
markdown
```

#### Planejador de Viagem:
```
crewai
ipykernel
python-dotenv
```

## 🎯 O que você vai aprender

### Conceitos Fundamentais:
- Fundamentos de agentes de IA
- Arquitetura de sistemas multi-agente
- Comunicação entre agentes
- Orquestração de workflows

### Técnicas Avançadas:
- Desenvolvimento de agentes autônomos
- Integração com APIs e serviços externos
- Processamento de linguagem natural
- Implementação de agentes conversacionais
- Automação e workflow com IA

### Habilidades Práticas:
- Configuração de ambientes de desenvolvimento
- Criação de agentes especializados
- Implementação de lógica de colaboração
- Debugging e otimização de agentes
- Deploy e monitoramento de sistemas

## 🚀 Como começar

### Pré-requisitos:
- Python 3.8+
- Conhecimento básico de Python
- Familiaridade com conceitos de IA/ML (recomendado)

### Configuração do Ambiente:

1. **Clone o repositório:**
```bash
git clone [url-do-repositorio]
cd crie-rapido-agentes-ia-do-zero-ao-avancado
```

2. **Configure ambiente virtual:**
```bash
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# ou
.venv\Scripts\activate  # Windows
```

3. **Instale dependências do projeto desejado:**
```bash
cd crewai_analista_de_mercado
pip install -r requirements.txt
```

4. **Execute o projeto:**
```bash
jupyter notebook
```

## 📖 Material de Apoio

**Bloco de Notas do Curso:** [Crie Rápido Agentes de IA - Do Zero ao Avançado](https://soamazing.notion.site/Crie-R-pido-Agentes-de-IA-Do-Zero-ao-Avan-ado-AI-Agents-214ec81f1f2880289416ce7fef290b38?source=copy_link)

### Recursos Disponíveis:
- Resumos detalhados das aulas
- Códigos de exemplo comentados
- Recursos adicionais e links úteis
- Exercícios práticos e desafios
- Troubleshooting e soluções comuns

## 🔧 Estrutura do Projeto

```
crie-rapido-agentes-ia-do-zero-ao-avancado/
├── README.md
├── crewai_analista_de_mercado/
│   ├── analise_mercado.ipynb
│   ├── requirements.txt
│   └── .venv/
├── crewai_planejador_de_viagem/
│   ├── agent.ipynb
│   ├── requirements.txt
│   ├── README.md
│   └── .venv/
└── [projetos futuros serão adicionados aqui]
```

## 🎓 Casos de Uso Reais

### Aplicações Práticas dos Conhecimentos:

1. **Automação de Negócios:**
   - Análise automática de relatórios
   - Geração de insights de mercado
   - Processamento de dados em larga escala

2. **Assistentes Inteligentes:**
   - Planejamento de viagens personalizado
   - Recomendações de produtos
   - Suporte ao cliente automatizado

3. **Análise de Dados:**
   - Processamento de documentos
   - Extração de informações
   - Geração de relatórios

4. **Automação de Workflows:**
   - Coordenação de tarefas complexas
   - Integração de múltiplos sistemas
   - Otimização de processos

## 🤝 Contribuição

Este repositório é destinado ao acompanhamento do curso. Sinta-se à vontade para:

- Adicionar seus próprios projetos e melhorias
- Compartilhar experiências de aprendizado
- Documentar soluções para problemas encontrados
- Sugerir melhorias nos códigos existentes

## 📄 Licença

Este projeto é parte do material do curso "Desenvolvimento de Agentes de IA - Do Zero ao Avançado". Consulte os termos de uso do curso para mais informações.

## 🔗 Links Úteis

- [Curso na Udemy](https://www.udemy.com/course/desenvolvimento-de-agentes-de-ia-do-zero-ao-avancado/)
- [Documentação CrewAI](https://docs.crewai.com/)
- [Bloco de Notas do Curso](https://soamazing.notion.site/Crie-R-pido-Agentes-de-IA-Do-Zero-ao-Avan-ado-AI-Agents-214ec81f1f2880289416ce7fef290b38?source=copy_link)
- [Comunidade CrewAI](https://github.com/joaomdmoura/crewAI)

---

**Desenvolvido durante o curso:** [Desenvolvimento de Agentes de IA - Do Zero ao Avançado](https://www.udemy.com/course/desenvolvimento-de-agentes-de-ia-do-zero-ao-avancado/)

**Material de apoio:** [Bloco de Notas do Curso](https://soamazing.notion.site/Crie-R-pido-Agentes-de-IA-Do-Zero-ao-Avan-ado-AI-Agents-214ec81f1f2880289416ce7fef290b38?source=copy_link) 