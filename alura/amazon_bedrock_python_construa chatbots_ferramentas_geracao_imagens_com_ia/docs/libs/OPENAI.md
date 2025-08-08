# OpenAI Python Library

## Visão Geral

A OpenAI Python Library fornece acesso conveniente à API REST da OpenAI a partir de qualquer aplicação Python 3.8+, oferecendo clientes síncronos e assíncronos.

## Instalação

```bash
pip install openai
```

Para suporte assíncrono com aiohttp:
```bash
pip install openai[aiohttp]
```

## Configuração Básica

```python
import os
from openai import OpenAI

client = OpenAI(
    # Esta é a configuração padrão e pode ser omitida
    api_key=os.environ.get("OPENAI_API_KEY"),
)
```

## Principais Funcionalidades

### Chat Completions

```python
completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "user",
            "content": "Say this is a test",
        }
    ],
)
```

### Responses API

```python
response = client.responses.create(
    model="gpt-4o",
    instructions="You are a coding assistant that talks like a pirate.",
    input="How do I check if a Python object is an instance of a class?",
)
print(response.output_text)
```

### Cliente Assíncrono

```python
import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI()

async def main():
    response = await client.responses.create(
        model="gpt-4o", 
        input="Explain disestablishmentarianism to a smart five year old."
    )
    print(response.output_text)

asyncio.run(main())
```

### Streaming

```python
from openai import OpenAI

client = OpenAI()

stream = client.responses.create(
    model="gpt-4o",
    input="Write a one-sentence bedtime story about a unicorn.",
    stream=True,
)

for event in stream:
    print(event)
```

### Upload de Arquivos

```python
from pathlib import Path

client.files.create(
    file=Path("input.jsonl"),
    purpose="fine-tune",
)
```

### Structured Outputs

```python
from pydantic import BaseModel
import openai

class Query(BaseModel):
    table_name: str
    columns: list[str]

completion = client.chat.completions.parse(
    model="gpt-4o-2024-08-06",
    messages=[
        {
            "role": "user",
            "content": "look up all my orders in may",
        },
    ],
    tools=[
        openai.pydantic_function_tool(Query),
    ],
)
```

### Azure OpenAI

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    api_version="2023-07-01-preview",
    azure_endpoint="https://example-endpoint.openai.azure.com",
)

completion = client.chat.completions.create(
    model="deployment-name",
    messages=[
        {
            "role": "user",
            "content": "How do I output all files in a directory using Python?",
        },
    ],
)
```

### Realtime API

```python
import asyncio
from openai import AsyncOpenAI

async def main():
    client = AsyncOpenAI()

    async with client.beta.realtime.connect(model="gpt-4o-realtime-preview") as connection:
        await connection.session.update(session={'modalities': ['text']})

        await connection.conversation.item.create(
            item={
                "type": "message",
                "role": "user",
                "content": [{"type": "input_text", "text": "Say hello!"}],
            }
        )
        await connection.response.create()

        async for event in connection:
            if event.type == 'response.text.delta':
                print(event.delta, flush=True, end="")

asyncio.run(main())
```

### Webhooks

```python
from openai import OpenAI
from flask import Flask, request

app = Flask(__name__)
client = OpenAI()

@app.route("/webhook", methods=["POST"])
def webhook():
    request_body = request.get_data(as_text=True)

    try:
        event = client.webhooks.unwrap(request_body, request.headers)

        if event.type == "response.completed":
            print("Response completed:", event.data)
        elif event.type == "response.failed":
            print("Response failed:", event.data)

        return "ok"
    except Exception as e:
        print("Invalid signature:", e)
        return "Invalid signature", 400
```

## Configuração Avançada

### Cliente HTTP Personalizado

```python
import httpx
from openai import OpenAI, DefaultHttpxClient

client = OpenAI(
    base_url="http://my.test.server.example.com:8083/v1",
    http_client=DefaultHttpxClient(
        proxy="http://my.test.proxy.example.com",
        transport=httpx.HTTPTransport(local_address="0.0.0.0"),
    ),
)
```

### Logging

```bash
export OPENAI_LOG=debug
```

## Métodos Principais da API

### Assistants

- `client.beta.assistants.create()` - Criar assistente
- `client.beta.assistants.retrieve()` - Recuperar assistente
- `client.beta.assistants.update()` - Atualizar assistente
- `client.beta.assistants.delete()` - Deletar assistente

### Fine-tuning

- `client.fine_tuning.jobs.create()` - Criar job de fine-tuning
- `client.fine_tuning.jobs.list()` - Listar jobs
- `client.fine_tuning.jobs.retrieve()` - Recuperar job específico

### Files

- `client.files.create()` - Upload de arquivo
- `client.files.list()` - Listar arquivos
- `client.files.delete()` - Deletar arquivo

## Tratamento de Erros

A biblioteca levanta exceções específicas para diferentes tipos de erro da API, facilitando o tratamento adequado em suas aplicações.

## Links Úteis

- [Documentação oficial](https://platform.openai.com/docs)
- [GitHub Repository](https://github.com/openai/openai-python)
- [Exemplos de código](https://github.com/openai/openai-cookbook)