# Curso Amazon Bedrock Python 🚀

> Construa chatbots e ferramentas de geração de imagens com IA

**Curso da Alura:** https://cursos.alura.com.br/course/amazon-bedrock-python-chatbots-ferramentas-geracao-imagens-ia

## 🎯 Sobre o Projeto

O Amazon Bedrock é a plataforma da AWS que oferece acesso a diversos modelos de inteligência artificial através de APIs simples e seguras. Este curso ensina como integrar esses modelos em aplicações Python para criar chatbots inteligentes e ferramentas de geração de imagens.

### ✨ O que você vai aprender:
- 🤖 Integração com modelos de linguagem (Claude, Llama, Titan)
- 🎨 Geração de imagens com IA (DALL-E, Stable Diffusion)
- 💬 Desenvolvimento de chatbots inteligentes
- 🔧 Configuração e uso do AWS Bedrock
- 🐍 Boas práticas com Python e APIs de IA

## 📋 Pré-requisitos

- ✅ Python 3.8+ instalado
- ✅ Conta AWS com acesso ao Bedrock
- ✅ Conhecimento básico de Python
- ✅ AWS CLI configurado (opcional)

## 🛠️ Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd amazon_bedrock_python_construa_chatbots_ferramentas_geracao_imagens_com_ia
```

### 2. Criar ambiente virtual

```bash
python3 -m venv curso_bedrock
source curso_bedrock/bin/activate  # Linux/Mac
# ou
curso_bedrock\Scripts\activate     # Windows
```

### 3. Instalar dependências

```bash
pip install -r requirements.txt
```

### 4. Configurar credenciais AWS

#### Opção A: AWS CLI
```bash
aws configure
```

#### Opção B: Arquivo de credenciais
Edite `~/.aws/credentials`:
```ini
[bedrock-curso]
aws_access_key_id = SUA_ACCESS_KEY
aws_secret_access_key = SUA_SECRET_KEY
```

E `~/.aws/config`:
```ini
[profile bedrock-curso]
region = us-east-1
output = json
```

#### Opção C: Variáveis de ambiente
Crie um arquivo `.env`:
```bash
AWS_ACCESS_KEY_ID=sua_access_key
AWS_SECRET_ACCESS_KEY=sua_secret_key
AWS_DEFAULT_REGION=us-east-1
AWS_PROFILE=bedrock-curso
```

### 5. Testar configuração

```bash
python amostra.py
```

Se tudo estiver configurado corretamente, você verá a lista de modelos disponíveis! 🎉

## 📦 Dependências

### Principais bibliotecas:
- **boto3** - SDK da AWS para Python
- **openai** - Biblioteca oficial da OpenAI  
- **python-dotenv** - Gerenciamento de variáveis de ambiente
- **pydub** - Manipulação de áudio
- **Pillow (PIL)** - Processamento de imagens
- **instabot** - Automação do Instagram (uso responsável)

### Instalação individual:
```bash
pip install boto3 botocore python-dotenv openai pydub Pillow instabot
```

## 🏗️ Estrutura do Projeto

```
📁 amazon_bedrock_python_construa_chatbots_ferramentas_geracao_imagens_com_ia/
├── 📄 amostra.py              # Script de teste de conexão
├── 📄 requirements.txt        # Dependências do projeto  
├── 📄 readme.md              # Este arquivo
├── 📁 docs/                  # Documentação
│   └── 📁 libs/              # Documentação das bibliotecas
│       ├── 📄 OPENAI.md      # Guia da OpenAI
│       ├── 📄 PYTHON_DOTENV.md
│       ├── 📄 PYDUB.md       
│       ├── 📄 PILLOW.md      
│       └── 📄 INSTABOT.md    
└── 📁 curso_bedrock/         # Ambiente virtual
```

## 🤖 Modelos Disponíveis no Bedrock

### 💬 Modelos de Texto (LLMs)
- **Anthropic Claude** (3.5 Sonnet, 4 Opus, Haiku)
- **Amazon Titan** (Text Express, Premier, Lite)
- **Meta Llama** (3.1, 3.2, 4 Scout/Maverick)
- **Mistral** (7B, Large, Mixtral 8x7B)
- **Cohere Command** (R, R+, Light)
- **AI21 Jamba** (1.5 Large/Mini)

### 🎨 Modelos de Imagem
- **Amazon Titan Image Generator**
- **Amazon Nova Canvas**
- **Stability AI SDXL**

### 🎬 Modelos Multimodais
- **Amazon Nova** (Premier, Pro, Lite)
- **Amazon Nova Reel** (geração de vídeo)
- **Claude Vision** (texto + imagem)
- **Llama Vision** (texto + imagem)

### 🔊 Modelos de Áudio
- **Amazon Nova Sonic** (speech-to-text, text-to-speech)

## 🚀 Exemplos de Uso

### Teste básico de conexão:
```python
python amostra.py
```

### Usar um modelo específico:
```python
import boto3

bedrock = boto3.client('bedrock-runtime', region_name='us-east-1')

# Exemplo com Claude
response = bedrock.invoke_model(
    modelId='anthropic.claude-3-sonnet-20240229-v1:0',
    contentType='application/json',
    accept='application/json',
    body='{"messages": [{"role": "user", "content": "Olá!"}]}'
)
```

## 📚 Documentação

Consulte a pasta `docs/libs/` para guias detalhados de cada biblioteca:

- [📖 OpenAI Guide](docs/libs/OPENAI.md)
- [📖 Python-dotenv Guide](docs/libs/PYTHON_DOTENV.md) 
- [📖 Pydub Guide](docs/libs/PYDUB.md)
- [📖 Pillow Guide](docs/libs/PILLOW.md)
- [📖 Instabot Guide](docs/libs/INSTABOT.md)

## ⚠️ Considerações Importantes

### 💰 Custos
- O Amazon Bedrock cobra por uso (tokens/imagens geradas)
- Monitore seus gastos no AWS Console
- Use modelos menores para testes (Haiku, Micro)

### 🔐 Segurança
- **NUNCA** faça commit de credenciais AWS
- Use perfis/roles IAM específicos
- Limite permissões ao mínimo necessário
- Adicione `.env` ao `.gitignore`

### 🌍 Regiões Recomendadas
- **us-east-1** (N. Virginia) - Maior disponibilidade
- **us-west-2** (Oregon) - Boa alternativa
- **eu-west-1** (Irlanda) - Para Europa

## 🛠️ Comandos Úteis

### Verificar modelos disponíveis:
```bash
aws bedrock list-foundation-models --region us-east-1
```

### Testar credenciais:
```bash
aws sts get-caller-identity --profile bedrock-curso
```

### Ativar ambiente virtual:
```bash
source curso_bedrock/bin/activate
```

### Atualizar dependências:
```bash
pip install --upgrade -r requirements.txt
```

## 🐛 Resolução de Problemas

### ❌ "No module named 'boto3'"
```bash
pip install boto3
```

### ❌ "Unable to locate credentials"
Verifique se suas credenciais AWS estão configuradas:
```bash
aws configure list
```

### ❌ "AccessDenied"
Verifique se seu usuário IAM tem as permissões:
- `bedrock:InvokeModel`
- `bedrock:ListFoundationModels`

### ❌ Modelo não disponível na região
Alguns modelos só estão disponíveis em regiões específicas. Use `us-east-1` que tem maior disponibilidade.

## 📞 Suporte

- 📧 **Issues:** Use o sistema de issues do repositório
- 📖 **Documentação AWS:** https://docs.aws.amazon.com/bedrock/
- 🎓 **Curso Alura:** https://cursos.alura.com.br/

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Não esqueça de dar uma estrela no repositório se este curso foi útil para você!**

🚀 **Bom curso e boa programação!** 🐍