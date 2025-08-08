# Python-dotenv

## Visão Geral

Python-dotenv é uma biblioteca que lê pares chave-valor de um arquivo .env e pode defini-los como variáveis de ambiente. Ajuda no desenvolvimento de aplicações seguindo os princípios dos 12 fatores.

## Instalação

```bash
pip install python-dotenv
```

Para instalar com CLI:
```bash
pip install "python-dotenv[cli]"
```

## Uso Básico

### Carregando Variáveis de Ambiente

```python
from dotenv import load_dotenv

load_dotenv()  # carrega variáveis de ambiente do arquivo .env

# Código da sua aplicação, que usa variáveis de ambiente (ex.: de `os.environ` ou
# `os.getenv`) como se viessem do ambiente real.
```

### Parseando .env para Dicionário

```python
from dotenv import dotenv_values

config = dotenv_values(".env")  # config = {"USER": "foo", "EMAIL": "foo@example.org"}
```

Combinando múltiplos arquivos:
```python
import os
from dotenv import dotenv_values

config = {
    **dotenv_values(".env.shared"),  # carrega variáveis de desenvolvimento compartilhadas
    **dotenv_values(".env.secret"),  # carrega variáveis sensíveis
    **os.environ,  # sobrescreve valores carregados com variáveis de ambiente
}
```

### Carregando de Stream

```python
from io import StringIO
from dotenv import load_dotenv

config = StringIO("USER=foo\nEMAIL=foo@example.org")
load_dotenv(stream=config)
```

## Formato do Arquivo .env

### Exemplo Básico
```bash
# Comentário
USER=foo
EMAIL=foo@example.org
```

### Valores Multilinhas
```bash
FOO="primeira linha
segunda linha"
```

### Variável sem Valor
```bash
FOO
```
Isso resulta na variável sendo associada com `None` ao usar `dotenv_values()`, enquanto `load_dotenv()` ignora tais variáveis.

## Interface de Linha de Comando (CLI)

### Configurando Variáveis
```bash
dotenv set USER foo
dotenv set EMAIL foo@example.org
```

### Listando Variáveis
```bash
dotenv list
dotenv list --format=json
```

### Executando Comandos
```bash
dotenv run -- python foo.py
```

## Integração com IPython

```ipython
%load_ext dotenv
%dotenv
```

Com path específico:
```ipython
%dotenv relative/or/absolute/path/to/.env
```

Com flags opcionais:
```ipython
# -o para sobrescrever variáveis existentes
# -v para verbosidade aumentada
%dotenv -o -v
```

## Instalação de Dependências para Desenvolvimento

### Com uv
```bash
uv venv
uv pip install -r requirements.txt
uv pip install -e .
uv ruff check .
uv format .
uv run pytest
```

### Com tox
```bash
tox
```

### Hooks de Pre-commit
```bash
uv run precommit install
```

## Construindo Documentação

```bash
uv pip install -r requirements-docs.txt
uv pip install -e .
uv run mkdocs serve
```

## Principais Funções

### `load_dotenv()`
- **Propósito**: Carrega variáveis de ambiente de um arquivo .env
- **Parâmetros**:
  - `dotenv_path`: Caminho para o arquivo .env
  - `stream`: Stream para ler ao invés de arquivo
  - `verbose`: Se deve imprimir mensagens
  - `override`: Se deve sobrescrever variáveis existentes
- **Retorno**: Booleano indicando se o arquivo foi carregado

### `dotenv_values()`
- **Propósito**: Parse um arquivo .env e retorna um dicionário
- **Parâmetros**:
  - `dotenv_path`: Caminho para o arquivo .env
  - `stream`: Stream para ler ao invés de arquivo
  - `verbose`: Se deve imprimir mensagens
- **Retorno**: Dicionário com as variáveis parseadas

### `find_dotenv()`
- **Propósito**: Procura por arquivos .env no diretório atual e pais
- **Parâmetros**:
  - `filename`: Nome do arquivo a procurar (padrão: '.env')
  - `raise_error_if_not_found`: Se deve levantar erro se não encontrado
  - `usecwd`: Se deve usar o diretório atual como ponto de partida
- **Retorno**: Caminho para o arquivo .env encontrado

### `set_key()`
- **Propósito**: Define ou atualiza uma chave no arquivo .env
- **Parâmetros**:
  - `dotenv_path`: Caminho para o arquivo .env
  - `key_to_set`: Nome da chave
  - `value_to_set`: Valor da chave
  - `quote_mode`: Modo de aspas ('always', 'auto', 'never')
- **Retorno**: Tupla (sucesso, chave, valor)

### `unset_key()`
- **Propósito**: Remove uma chave do arquivo .env
- **Parâmetros**:
  - `dotenv_path`: Caminho para o arquivo .env
  - `key_to_unset`: Nome da chave a remover
  - `quote_mode`: Modo de aspas
- **Retorno**: Tupla (sucesso, chave removida)

### `get_key()`
- **Propósito**: Obtém o valor de uma chave do arquivo .env
- **Parâmetros**:
  - `dotenv_path`: Caminho para o arquivo .env
  - `key_to_get`: Nome da chave
- **Retorno**: Valor da chave ou None se não encontrada

## Melhores Práticas

1. **Nunca faça commit de arquivos .env** - Adicione ao .gitignore
2. **Use arquivos .env diferentes para ambientes diferentes**:
   - `.env.development`
   - `.env.staging` 
   - `.env.production`
3. **Documente variáveis necessárias** em um arquivo `.env.example`
4. **Use nomes descritivos** para variáveis de ambiente
5. **Prefira usar `dotenv_values()` para configurações complexas**

## Exemplo de Configuração de Projeto

```python
import os
from dotenv import load_dotenv

# Carrega variáveis de desenvolvimento por padrão
load_dotenv('.env.development')

# Sobrescreve com variáveis locais se existirem
load_dotenv('.env.local', override=True)

# Configuração da aplicação
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    DATABASE_URL = os.getenv('DATABASE_URL')
    DEBUG = os.getenv('DEBUG', 'False').lower() == 'true'
    PORT = int(os.getenv('PORT', 5000))
```

## Links Úteis

- [GitHub Repository](https://github.com/theskumar/python-dotenv)
- [Documentação dos 12 Fatores](https://12factor.net/)
- [PyPI Package](https://pypi.org/project/python-dotenv/)