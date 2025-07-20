#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para testar a análise de mercado com agentes e tarefas dinâmicas
que aceitam a variável {sector} para analisar qualquer setor
"""

from dotenv import load_dotenv, find_dotenv
from crewai import Agent, Task, Crew
from IPython.display import Markdown, display

# Carregar variáveis de ambiente
load_dotenv(find_dotenv())

def criar_agentes(sector):
    """Criar os três agentes para análise de mercado com foco no setor específico"""
    
    # 1. Pesquisador de Mercado
    pesquisador_mercado = Agent(
        role='Pesquisador de Mercado',
        goal=f'Coletar e organizar informações detalhadas sobre o mercado de {sector}, tendências, concorrentes e oportunidades',
        backstory=f'''Você é um pesquisador de mercado experiente com mais de 10 anos de experiência. 
        Sua especialidade é coletar dados precisos e relevantes sobre mercados, especialmente no setor de {sector}. 
        Você identifica tendências emergentes e analisa o comportamento dos consumidores neste setor específico. 
        Você tem acesso a fontes confiáveis e sabe como filtrar informações importantes sobre {sector}.''',
        verbose=True,
        allow_delegation=False
    )

    # 2. Analista de Mercado
    analista_mercado = Agent(
        role='Analista de Mercado',
        goal=f'Analisar dados de mercado do setor de {sector}, identificar insights estratégicos e fornecer recomendações baseadas em evidências',
        backstory=f'''Você é um analista de mercado sênior com formação em economia e estatística. 
        Sua expertise inclui análise de dados do setor de {sector}, modelagem preditiva e interpretação de indicadores 
        econômicos específicos deste mercado. Você transforma dados complexos em insights acionáveis e estratégias de negócio 
        focadas no setor de {sector}.''',
        verbose=True,
        allow_delegation=False
    )

    # 3. Redator
    redator = Agent(
        role='Redator Especializado',
        goal=f'Criar relatórios concisos, claros e profissionais baseados nas análises de mercado do setor de {sector}',
        backstory=f'''Você é um redator experiente especializado em conteúdo técnico e relatórios de negócio. 
        Sua habilidade é transformar análises complexas sobre {sector} em documentos claros e concisos. 
        Você tem experiência em comunicação corporativa e sabe como apresentar informações 
        técnicas sobre {sector} de forma acessível para diferentes públicos.''',
        verbose=True,
        allow_delegation=False
    )
    
    return pesquisador_mercado, analista_mercado, redator

def criar_tarefas(pesquisador_mercado, analista_mercado, redator, sector):
    """Criar as tarefas para cada agente com foco no setor específico"""
    
    # Tarefa para o Pesquisador de Mercado
    tarefa_pesquisador = Task(
        description=f"""
        Você é um pesquisador de mercado experiente especializado no setor de {sector}. Sua tarefa é:
        
        1. Identificar e analisar o mercado-alvo do setor de {sector}
        2. Pesquisar concorrentes diretos e indiretos no setor de {sector}
        3. Coletar dados sobre tendências do setor de {sector}
        4. Analisar comportamento do consumidor no setor de {sector}
        5. Identificar oportunidades de mercado no setor de {sector}
        6. Coletar dados demográficos e psicográficos específicos do setor de {sector}
        7. Pesquisar regulamentações específicas do setor de {sector}
        
        Forneça informações detalhadas e baseadas em dados reais sobre o setor de {sector}.
        """,
        agent=pesquisador_mercado,
        expected_output=f"Relatório detalhado de pesquisa de mercado do setor de {sector} com dados, concorrentes, tendências e oportunidades identificadas"
    )

    # Tarefa para o Analista de Mercado
    tarefa_analista = Task(
        description=f"""
        Você é um analista de mercado sênior especializado no setor de {sector}. Sua tarefa é:
        
        1. Analisar os dados coletados pelo pesquisador sobre o setor de {sector}
        2. Identificar insights estratégicos específicos do setor de {sector}
        3. Avaliar a viabilidade do mercado do setor de {sector}
        4. Calcular métricas de mercado (TAM, SAM, SOM) para o setor de {sector}
        5. Identificar riscos e ameaças específicos do setor de {sector}
        6. Analisar forças competitivas (Porter's 5 Forces) no setor de {sector}
        7. Propor estratégias de posicionamento para o setor de {sector}
        8. Avaliar cenários futuros do mercado do setor de {sector}
        
        Base suas análises em evidências e dados quantitativos específicos do setor de {sector}.
        """,
        agent=analista_mercado,
        expected_output=f"Análise estratégica completa do setor de {sector} com insights, métricas de mercado, avaliação de riscos e recomendações estratégicas"
    )

    # Tarefa para o Redator
    tarefa_redator = Task(
        description=f"""
        Você é um redator especializado em relatórios de negócio do setor de {sector}. Sua tarefa é:
        
        1. Revisar as análises do pesquisador e do analista sobre o setor de {sector}
        2. Criar um relatório executivo conciso e profissional sobre o setor de {sector}
        3. Estruturar o documento de forma clara e lógica sobre o setor de {sector}
        4. Incluir resumo executivo, metodologia, resultados e recomendações sobre {sector}
        5. Usar linguagem acessível para diferentes públicos sobre o setor de {sector}
        6. Incluir gráficos e visualizações quando apropriado sobre {sector}
        7. Destacar pontos-chave e insights principais sobre o setor de {sector}
        8. Criar versão executiva e versão detalhada sobre o setor de {sector}
        
        Mantenha o foco na clareza e concisão sobre o setor de {sector}.
        """,
        agent=redator,
        expected_output=f"Relatório profissional de análise de mercado do setor de {sector} com resumo executivo, análises detalhadas e recomendações claras"
    )
    
    return tarefa_pesquisador, tarefa_analista, tarefa_redator

def executar_crew(sector="inteligencia artificial"):
    """Executar o Crew e retornar o resultado"""
    
    print(f"🎯 Setor selecionado para análise: {sector}")
    print("=" * 60)
    
    # Criar agentes e tarefas
    pesquisador_mercado, analista_mercado, redator = criar_agentes(sector)
    tarefa_pesquisador, tarefa_analista, tarefa_redator = criar_tarefas(
        pesquisador_mercado, analista_mercado, redator, sector
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

def testar_diferentes_setores():
    """Testar a análise com diferentes setores"""
    
    setores = [
        "inteligencia artificial",
        "energia renovavel",
        "fintech",
        "e-commerce",
        "saude digital"
    ]
    
    print("🧪 TESTANDO DIFERENTES SETORES")
    print("=" * 60)
    
    for i, sector in enumerate(setores, 1):
        print(f"\n🔍 Teste {i}/5: Analisando setor '{sector}'")
        print("-" * 40)
        
        try:
            resultado = executar_crew(sector)
            print(f"✅ Análise do setor '{sector}' concluída com sucesso!")
            print(f"📊 Tamanho do resultado: {len(str(resultado))} caracteres")
        except Exception as e:
            print(f"❌ Erro na análise do setor '{sector}': {e}")
        
        print("\n" + "="*60)

if __name__ == "__main__":
    # Testar com um setor específico
    print("🎯 ANÁLISE DE MERCADO DINÂMICA")
    print("=" * 60)
    
    # Você pode alterar o setor aqui
    sector_teste = "inteligencia artificial"
    
    # Executar a análise
    resultado = executar_crew(sector_teste)
    
    # Exibir o resultado em formato Markdown
    exibir_resultado_markdown(resultado)
    
    # Descomente a linha abaixo para testar múltiplos setores
    # testar_diferentes_setores() 