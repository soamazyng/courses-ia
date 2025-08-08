# Docker para Primeiro Projeto

Este projeto está configurado para rodar com Docker usando uma abordagem multi-stage para otimização.

## Arquivos Docker Criados

- `Dockerfile` - Configuração do container
- `docker-compose.yml` - Orquestração do container
- `.dockerignore` - Exclusões para otimizar o build

## Como Executar

### Opção 1: Usando Docker Compose (Recomendado)

```bash
# Construir e iniciar o container
docker-compose up --build

# Executar em background
docker-compose up -d --build

# Parar o container
docker-compose down
```

### Opção 2: Usando Docker diretamente

```bash
# Construir a imagem
docker build -t primeiro-projeto .

# Executar o container
docker run -p 3000:80 primeiro-projeto

# Executar em background
docker run -d -p 3000:80 primeiro-projeto
```

## Acessando a Aplicação

Após executar um dos comandos acima, a aplicação estará disponível em:

**http://localhost:3000**

## Estrutura do Dockerfile

### Estágio 1: Builder
- Usa Node.js 18 Alpine para menor tamanho
- Instala dependências
- Constrói o projeto para produção

### Estágio 2: Production
- Usa Nginx Alpine para servir arquivos estáticos
- Copia apenas os arquivos construídos
- Configuração otimizada para produção

## Vantagens desta Configuração

1. **Multi-stage build**: Reduz significativamente o tamanho da imagem final
2. **Nginx**: Servidor web otimizado para arquivos estáticos
3. **Alpine Linux**: Imagens base menores e mais seguras
4. **Cache otimizado**: Dependências são instaladas antes do código fonte

## Comandos Úteis

```bash
# Ver logs do container
docker-compose logs -f

# Entrar no container
docker-compose exec app sh

# Reconstruir sem cache
docker-compose build --no-cache

# Ver imagens
docker images

# Limpar imagens não utilizadas
docker system prune -a
```

## Desenvolvimento

Para desenvolvimento local sem Docker, continue usando:

```bash
npm install
npm run dev
```

## Produção

Para deploy em produção, use o Dockerfile que já está otimizado para ambiente de produção com Nginx servindo os arquivos estáticos. 