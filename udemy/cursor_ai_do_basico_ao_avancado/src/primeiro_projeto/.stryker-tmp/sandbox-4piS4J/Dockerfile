# Estágio de build - Node.js para compilar o projeto
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci --only=production=false

# Copia o código fonte
COPY . .

# Constrói o projeto para produção
RUN npm run build

# Estágio de produção - Nginx para servir os arquivos estáticos
FROM nginx:alpine AS production

# Copia os arquivos construídos do estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"] 