# Primeiro Projeto - React + Vite

Um projeto React moderno construído com Vite, incluindo roteamento, componentes reutilizáveis e configuração Docker para desenvolvimento e produção.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **React Router DOM** - Roteamento para SPA
- **ESLint** - Linting e formatação de código
- **Docker** - Containerização para desenvolvimento e produção

## 📁 Estrutura do Projeto

```
primeiro_projeto/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar.jsx      # Navegação principal
│   │   └── HTMLComponents.js
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.jsx        # Página inicial
│   │   ├── Sobre.jsx       # Página sobre
│   │   └── Contato.jsx     # Página de contato
│   ├── data/               # Dados estáticos
│   │   ├── homeData.js
│   │   ├── sobreData.js
│   │   └── contatoData.js
│   ├── assets/             # Recursos estáticos
│   └── App.jsx             # Componente principal
├── public/                 # Arquivos públicos
├── Dockerfile              # Configuração Docker
├── docker-compose.yml      # Orquestração Docker
└── README-Docker.md        # Documentação Docker
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Docker (opcional)

### Desenvolvimento Local

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd primeiro_projeto

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Constrói para produção
npm run preview      # Visualiza build de produção
npm run lint         # Executa ESLint
```

## 🐳 Docker

O projeto está configurado com Docker para facilitar o desenvolvimento e deploy.

### Executar com Docker

```bash
# Usando Docker Compose (Recomendado)
docker-compose up --build

# Usando Docker diretamente
docker build -t primeiro-projeto .
docker run -p 3000:80 primeiro-projeto
```

### Acessar a Aplicação
- **Desenvolvimento local**: http://localhost:5173
- **Docker**: http://localhost:3000

Para mais detalhes sobre Docker, consulte o [README-Docker.md](./README-Docker.md).

## 📄 Páginas e Funcionalidades

### 🏠 Página Inicial (Home)
- Apresentação do projeto
- Navegação principal
- Design responsivo

### ℹ️ Página Sobre
- Informações sobre o projeto
- Tecnologias utilizadas
- Objetivos

### 📞 Página Contato
- Formulário de contato
- Informações de contato
- Integração com dados estáticos

## 🎨 Componentes

### Navbar
- Navegação responsiva
- Links para todas as páginas
- Design moderno e limpo

### HTMLComponents
- Componentes reutilizáveis
- Estrutura modular
- Fácil manutenção

## 📊 Dados

O projeto utiliza dados estáticos organizados em:
- `homeData.js` - Dados da página inicial
- `sobreData.js` - Dados da página sobre
- `contatoData.js` - Dados da página de contato

## 🔧 Configuração

### ESLint
Configurado com regras para React e boas práticas de desenvolvimento.

### Vite
Configuração otimizada para desenvolvimento rápido e build eficiente.

### Docker
Multi-stage build otimizado para produção com Nginx.

## 🚀 Deploy

### Desenvolvimento
```bash
npm run dev
```

### Produção Local
```bash
npm run build
npm run preview
```

### Produção com Docker
```bash
docker-compose up --build
```

## 📝 Licença

Este projeto é parte do curso "Cursor AI do Básico ao Avançado".

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, consulte a documentação do curso ou entre em contato através da página de contato da aplicação.
