# Importações necessárias
from dotenv import load_dotenv, find_dotenv
from crewai import Agent, Task, Crew

# Carregar variáveis de ambiente
load_dotenv(find_dotenv())

# Definir o setor para análise
sector = "inteligencia artificial"

# 1. Pesquisador de Mercado
pesquisador_mercado = Agent(
    role="Pesquisador de Mercado",
    goal="Coletar e organizar informações detalhadas sobre o mercado, tendências, concorrentes e oportunidades",
    backstory="""Você é um pesquisador de mercado experiente com mais de 10 anos de experiência. 
    Sua especialidade é coletar dados precisos e relevantes sobre mercados, identificar tendências 
    emergentes e analisar o comportamento dos consumidores. Você tem acesso a fontes confiáveis 
    e sabe como filtrar informações importantes.""",
    verbose=True,
    allow_delegation=False
)

# 2. Analista de Mercado
analista_mercado = Agent(
    role="Analista de Mercado",
    goal="Analisar dados de mercado, identificar insights estratégicos e fornecer recomendações baseadas em evidências",
    backstory="""Você é um analista de mercado sênior com formação em economia e estatística. 
    Sua expertise inclui análise de dados, modelagem preditiva e interpretação de indicadores 
    econômicos. Você transforma dados complexos em insights acionáveis e estratégias de negócio.""",
    verbose=True,
    allow_delegation=False
)

# 3. Redator
redator = Agent(
    role="Redator Especializado",
    goal="Criar relatórios concisos, claros e profissionais baseados nas análises de mercado",
    backstory="""Você é um redator experiente especializado em conteúdo técnico e relatórios de negócio. 
    Sua habilidade é transformar análises complexas em documentos claros e concisos. 
    Você tem experiência em comunicação corporativa e sabe como apresentar informações 
    técnicas de forma acessível para diferentes públicos.""",
    verbose=True,
    allow_delegation=False
)

# Tarefa para o Pesquisador de Mercado
tarefa_pesquisador = Task(
    description=f"""
    Você é um pesquisador de mercado experiente. Sua tarefa é analisar o setor: {sector}
    
    1. Identificar e analisar o mercado-alvo do setor {sector}
    2. Pesquisar concorrentes diretos e indiretos no setor {sector}
    3. Coletar dados sobre tendências do setor {sector}
    4. Analisar comportamento do consumidor no setor {sector}
    5. Identificar oportunidades de mercado no setor {sector}
    6. Coletar dados demográficos e psicográficos do setor {sector}
    7. Pesquisar regulamentações específicas do setor {sector}
    
    Forneça informações detalhadas e baseadas em dados reais sobre o setor {sector}.
    """,
    agent=pesquisador_mercado,
    expected_output=f"Relatório detalhado de pesquisa de mercado do setor {sector} com dados, concorrentes, tendências e oportunidades identificadas"
)

# Tarefa para o Analista de Mercado
tarefa_analista = Task(
    description=f"""
    Você é um analista de mercado sênior. Sua tarefa é analisar o setor: {sector}
    
    1. Analisar os dados coletados pelo pesquisador sobre o setor {sector}
    2. Identificar insights estratégicos específicos do setor {sector}
    3. Avaliar a viabilidade do mercado no setor {sector}
    4. Calcular métricas de mercado (TAM, SAM, SOM) para o setor {sector}
    5. Identificar riscos e ameaças específicos do setor {sector}
    6. Analisar forças competitivas (Porter's 5 Forces) no setor {sector}
    7. Propor estratégias de posicionamento para o setor {sector}
    8. Avaliar cenários futuros do mercado no setor {sector}
    
    Base suas análises em evidências e dados quantitativos do setor {sector}.
    """,
    agent=analista_mercado,
    expected_output=f"Análise estratégica completa do setor {sector} com insights, métricas de mercado, avaliação de riscos e recomendações estratégicas"
)

# Tarefa para o Redator
tarefa_redator = Task(
    description=f"""
    Você é um redator especializado em relatórios de negócio. Sua tarefa é criar um relatório sobre o setor: {sector}
    
    1. Revisar as análises do pesquisador e do analista sobre o setor {sector}
    2. Criar um relatório executivo conciso e profissional sobre o setor {sector}
    3. Estruturar o documento de forma clara e lógica
    4. Incluir resumo executivo, metodologia, resultados e recomendações para o setor {sector}
    5. Usar linguagem acessível para diferentes públicos
    6. Incluir gráficos e visualizações quando apropriado
    7. Destacar pontos-chave e insights principais do setor {sector}
    8. Criar versão executiva e versão detalhada do relatório sobre o setor {sector}
    
    Mantenha o foco na clareza e concisão, especificamente para o setor {sector}.
    """,
    agent=redator,
    expected_output=f"Relatório profissional de análise de mercado do setor {sector} com resumo executivo, análises detalhadas e recomendações claras"
)

# Criar o Crew com os agentes e tarefas
crew = Crew(
    agents=[pesquisador_mercado, analista_mercado, redator],
    tasks=[tarefa_pesquisador, tarefa_analista, tarefa_redator],
    verbose=True
)

print(f"🚀 Iniciando análise de mercado para o setor: {sector}")
print("📋 Agentes configurados:")
print("   - Pesquisador de Mercado")
print("   - Analista de Mercado")
print("   - Redator Especializado")
print("\n⏳ Executando Crew...")

# Executar o Crew e armazenar o resultado
resultado_analise = crew.kickoff()

print("\n✅ Análise concluída com sucesso!")
print(f"📊 Resultado armazenado na variável 'resultado_analise'")
print(f"📄 Tamanho do resultado: {len(str(resultado_analise))} caracteres")
print(f"\n📝 Resultado da análise:")
print(resultado_analise) 