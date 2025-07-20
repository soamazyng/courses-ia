#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para testar a exibição do resultado da análise em formato Markdown
"""

from dotenv import load_dotenv, find_dotenv
from crewai import Agent, Task, Crew
from IPython.display import Markdown, display

# Carregar variáveis de ambiente
load_dotenv(find_dotenv())

def criar_agentes():
    """Criar os três agentes para análise de mercado"""
    
    # 1. Pesquisador de Mercado
    pesquisador_mercado = Agent(
        role='Pesquisador de Mercado',
        goal='Coletar e organizar informações detalhadas sobre o mercado, tendências, concorrentes e oportunidades',
        backstory='''Você é um pesquisador de mercado experiente com mais de 10 anos de experiência. 
        Sua especialidade é coletar dados precisos e relevantes sobre mercados, identificar tendências 
        emergentes e analisar o comportamento dos consumidores. Você tem acesso a fontes confiáveis 
        e sabe como filtrar informações importantes.''',
        verbose=True,
        allow_delegation=False
    )

    # 2. Analista de Mercado
    analista_mercado = Agent(
        role='Analista de Mercado',
        goal='Analisar dados de mercado, identificar insights estratégicos e fornecer recomendações baseadas em evidências',
        backstory='''Você é um analista de mercado sênior com formação em economia e estatística. 
        Sua expertise inclui análise de dados, modelagem preditiva e interpretação de indicadores 
        econômicos. Você transforma dados complexos em insights acionáveis e estratégias de negócio.''',
        verbose=True,
        allow_delegation=False
    )

    # 3. Redator
    redator = Agent(
        role='Redator Especializado',
        goal='Criar relatórios concisos, claros e profissionais baseados nas análises de mercado',
        backstory='''Você é um redator experiente especializado em conteúdo técnico e relatórios de negócio. 
        Sua habilidade é transformar análises complexas em documentos claros e concisos. 
        Você tem experiência em comunicação corporativa e sabe como apresentar informações 
        técnicas de forma acessível para diferentes públicos.''',
        verbose=True,
        allow_delegation=False
    )
    
    return pesquisador_mercado, analista_mercado, redator

def criar_tarefas(pesquisador_mercado, analista_mercado, redator):
    """Criar as tarefas para cada agente"""
    
    # Tarefa para o Pesquisador de Mercado
    tarefa_pesquisador = Task(
        description="""
        Você é um pesquisador de mercado experiente. Sua tarefa é:
        
        1. Identificar e analisar o mercado-alvo
        2. Pesquisar concorrentes diretos e indiretos
        3. Coletar dados sobre tendências do setor
        4. Analisar comportamento do consumidor
        5. Identificar oportunidades de mercado
        6. Coletar dados demográficos e psicográficos
        7. Pesquisar regulamentações do setor
        
        Forneça informações detalhadas e baseadas em dados reais.
        """,
        agent=pesquisador_mercado,
        expected_output="Relatório detalhado de pesquisa de mercado com dados, concorrentes, tendências e oportunidades identificadas"
    )

    # Tarefa para o Analista de Mercado
    tarefa_analista = Task(
        description="""
        Você é um analista de mercado sênior. Sua tarefa é:
        
        1. Analisar os dados coletados pelo pesquisador
        2. Identificar insights estratégicos
        3. Avaliar a viabilidade do mercado
        4. Calcular métricas de mercado (TAM, SAM, SOM)
        5. Identificar riscos e ameaças
        6. Analisar forças competitivas (Porter's 5 Forces)
        7. Propor estratégias de posicionamento
        8. Avaliar cenários futuros do mercado
        
        Base suas análises em evidências e dados quantitativos.
        """,
        agent=analista_mercado,
        expected_output="Análise estratégica completa com insights, métricas de mercado, avaliação de riscos e recomendações estratégicas"
    )

    # Tarefa para o Redator
    tarefa_redator = Task(
        description="""
        Você é um redator especializado em relatórios de negócio. Sua tarefa é:
        
        1. Revisar as análises do pesquisador e do analista
        2. Criar um relatório executivo conciso e profissional
        3. Estruturar o documento de forma clara e lógica
        4. Incluir resumo executivo, metodologia, resultados e recomendações
        5. Usar linguagem acessível para diferentes públicos
        6. Incluir gráficos e visualizações quando apropriado
        7. Destacar pontos-chave e insights principais
        8. Criar versão executiva e versão detalhada
        
        Mantenha o foco na clareza e concisão.
        """,
        agent=redator,
        expected_output="Relatório profissional de análise de mercado com resumo executivo, análises detalhadas e recomendações claras"
    )
    
    return tarefa_pesquisador, tarefa_analista, tarefa_redator

def executar_crew(sector="inteligencia artificial"):
    """Executar o Crew e retornar o resultado"""
    
    # Criar agentes e tarefas
    pesquisador_mercado, analista_mercado, redator = criar_agentes()
    tarefa_pesquisador, tarefa_analista, tarefa_redator = criar_tarefas(
        pesquisador_mercado, analista_mercado, redator
    )
    
    # Criar o Crew
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
    
    # Executar o Crew
    resultado_analise = crew.kickoff()
    
    print("\n✅ Análise concluída com sucesso!")
    print(f"📊 Resultado armazenado na variável 'resultado_analise'")
    print(f"📄 Tamanho do resultado: {len(str(resultado_analise))} caracteres")
    
    return resultado_analise

def exibir_resultado_markdown(resultado_analise):
    """Exibir o resultado em formato Markdown"""
    
    print("📋 RESULTADO DA ANÁLISE DE MERCADO")
    print("=" * 50)
    
    # Extrair o texto do resultado do Crew
    if hasattr(resultado_analise, 'raw'):
        texto_resultado = resultado_analise.raw
    else:
        texto_resultado = str(resultado_analise)
    
    # Exibir em formato Markdown
    markdown_result = Markdown(texto_resultado)
    display(markdown_result)
    
    print("\n📄 RESULTADO COMO TEXTO SIMPLES:")
    print("=" * 50)
    print(texto_resultado)

if __name__ == "__main__":
    # Executar a análise
    resultado = executar_crew("inteligencia artificial")
    
    # Exibir o resultado em formato Markdown
    exibir_resultado_markdown(resultado) 