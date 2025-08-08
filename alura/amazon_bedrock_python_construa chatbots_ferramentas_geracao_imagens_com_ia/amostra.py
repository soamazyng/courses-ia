#!/usr/bin/env python3
"""
Arquivo de exemplo para testar conexão com Amazon Bedrock
Autor: Claude Code Assistant
Data: 2025-01-08
"""

import boto3
import json
from botocore.exceptions import ClientError, NoCredentialsError
from dotenv import load_dotenv
import os

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

def criar_cliente_bedrock(profile_name=None, region_name='us-east-1'):
    """
    Cria e retorna um cliente do Amazon Bedrock
    
    Args:
        profile_name (str): Nome do perfil AWS (opcional)
        region_name (str): Região AWS (padrão: us-east-1)
    
    Returns:
        boto3.client: Cliente do Amazon Bedrock
    """
    try:
        if profile_name:
            # Usar perfil específico
            session = boto3.Session(profile_name=profile_name)
            bedrock_client = session.client('bedrock', region_name=region_name)
            print(f"✅ Cliente Bedrock criado com perfil: {profile_name}")
        else:
            # Usar credenciais padrão ou variáveis de ambiente
            bedrock_client = boto3.client('bedrock', region_name=region_name)
            print(f"✅ Cliente Bedrock criado com credenciais padrão")
        
        return bedrock_client
    
    except NoCredentialsError:
        print("❌ Erro: Credenciais AWS não encontradas!")
        print("💡 Dica: Configure suas credenciais com 'aws configure' ou defina as variáveis de ambiente")
        return None
    
    except Exception as e:
        print(f"❌ Erro ao criar cliente Bedrock: {e}")
        return None

def listar_modelos(bedrock_client):
    """
    Lista todos os modelos disponíveis no Amazon Bedrock
    
    Args:
        bedrock_client: Cliente do Amazon Bedrock
    """
    try:
        print("\n🔍 Buscando modelos disponíveis no Amazon Bedrock...")
        
        # Listar modelos de fundação
        response = bedrock_client.list_foundation_models()
        
        modelos = response['modelSummaries']
        print(f"\n📊 Total de modelos encontrados: {len(modelos)}")
        print("=" * 80)
        
        # Agrupar por provedor
        provedores = {}
        for modelo in modelos:
            provedor = modelo['providerName']
            if provedor not in provedores:
                provedores[provedor] = []
            provedores[provedor].append(modelo)
        
        # Imprimir modelos organizados por provedor
        for provedor, modelos_provedor in provedores.items():
            print(f"\n🏢 {provedor}")
            print("-" * 50)
            
            for modelo in modelos_provedor:
                print(f"📝 Nome: {modelo['modelName']}")
                print(f"🆔 ID: {modelo['modelId']}")
                print(f"🔤 Modalidades: {', '.join(modelo.get('inputModalities', []))}")
                print(f"📤 Saída: {', '.join(modelo.get('outputModalities', []))}")
                
                # Verificar se há informações de customização
                if modelo.get('customizationsSupported'):
                    print(f"🛠️  Customização: {', '.join(modelo['customizationsSupported'])}")
                
                # Verificar se há informações de inferência
                if modelo.get('inferenceTypesSupported'):
                    print(f"⚡ Inferência: {', '.join(modelo['inferenceTypesSupported'])}")
                
                print()
        
        return modelos
    
    except ClientError as e:
        error_code = e.response['Error']['Code']
        error_message = e.response['Error']['Message']
        
        if error_code == 'AccessDeniedException':
            print("❌ Erro de Acesso: Permissões insuficientes para listar modelos")
            print("💡 Dica: Verifique se sua conta tem permissões para bedrock:ListFoundationModels")
        else:
            print(f"❌ Erro da AWS: {error_code} - {error_message}")
        
        return None
    
    except Exception as e:
        print(f"❌ Erro inesperado ao listar modelos: {e}")
        return None

def testar_conexao_bedrock(bedrock_client):
    """
    Testa a conexão com o Amazon Bedrock
    
    Args:
        bedrock_client: Cliente do Amazon Bedrock
    """
    try:
        print("\n🔗 Testando conexão com Amazon Bedrock...")
        
        # Fazer uma chamada simples para testar
        response = bedrock_client.list_foundation_models(byOutputModality='TEXT')
        
        if response['modelSummaries']:
            print("✅ Conexão com Bedrock estabelecida com sucesso!")
            return True
        else:
            print("⚠️  Conexão estabelecida, mas nenhum modelo de texto encontrado")
            return False
    
    except Exception as e:
        print(f"❌ Falha na conexão com Bedrock: {e}")
        return False

def main():
    """
    Função principal
    """
    print("🚀 Iniciando teste de conexão com Amazon Bedrock")
    print("=" * 60)
    
    # Verificar se há um perfil específico definido
    profile_name = os.getenv('AWS_PROFILE', 'bedrock-curso')  # Pode ser None para usar padrão
    region_name = os.getenv('AWS_DEFAULT_REGION', 'us-east-1')
    
    print(f"📍 Região: {region_name}")
    if profile_name and profile_name != 'default':
        print(f"👤 Perfil: {profile_name}")
    
    # Criar cliente Bedrock
    bedrock_client = criar_cliente_bedrock(profile_name, region_name)
    
    if bedrock_client is None:
        print("❌ Não foi possível criar o cliente Bedrock. Encerrando...")
        return
    
    # Testar conexão
    if testar_conexao_bedrock(bedrock_client):
        # Listar modelos
        modelos = listar_modelos(bedrock_client)
        
        if modelos:
            print("\n" + "=" * 80)
            print("🎯 RESUMO:")
            print(f"   • Conexão: ✅ Bem-sucedida")
            print(f"   • Região: {region_name}")
            print(f"   • Total de modelos: {len(modelos)}")
            print(f"   • Perfil usado: {profile_name if profile_name else 'padrão'}")
            
            # Destacar alguns modelos importantes
            modelos_importantes = [
                'anthropic.claude-3-sonnet-20240229-v1:0',
                'anthropic.claude-3-haiku-20240307-v1:0',
                'amazon.titan-text-express-v1',
                'meta.llama2-70b-chat-v1'
            ]
            
            print("\n🌟 MODELOS RECOMENDADOS PARA O CURSO:")
            for modelo_id in modelos_importantes:
                for modelo in modelos:
                    if modelo['modelId'] == modelo_id:
                        print(f"   • {modelo['modelName']} ({modelo_id})")
                        break
        
        print("\n✨ Teste concluído com sucesso!")
    
    else:
        print("\n❌ Falha na conexão com Bedrock")
        print("\n🔧 DICAS PARA RESOLVER:")
        print("   1. Verifique suas credenciais AWS")
        print("   2. Confirme se a região suporta Bedrock")
        print("   3. Verifique as permissões IAM")
        print("   4. Teste com: aws bedrock list-foundation-models --region us-east-1")

if __name__ == "__main__":
    main()