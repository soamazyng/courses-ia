# Primeiro Projeto - React + Vite

Um projeto React moderno construído com Vite, incluindo roteamento, componentes reutilizáveis, seção de blog e configuração Docker para desenvolvimento e produção.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **React Router DOM** - Roteamento para SPA
- **React Bootstrap** - Framework CSS para componentes React
- **ESLint** - Linting e formatação de código
- **Docker** - Containerização para desenvolvimento e produção

## 📁 Estrutura do Projeto

```
primeiro_projeto/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar.jsx      # Navegação principal
│   │   └── Home/           # Componentes específicos da Home
│   │       └── BlogNews.jsx # Componente de notícias do blog
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.jsx        # Página inicial
│   │   ├── Sobre.jsx       # Página sobre
│   │   ├── Contato.jsx     # Página de contato
│   │   ├── DesenvolvimentoWeb.jsx
│   │   ├── AplicacoesMobile.jsx
│   │   ├── SistemasEmpresariais.jsx
│   │   └── ConsultoriaTI.jsx
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
npm test             # Executa testes em modo watch
npm run test:run     # Executa todos os testes
npm run test:ui      # Executa testes com interface gráfica
npm run test:coverage # Executa testes com relatório de cobertura
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
- Apresentação da empresa Nova Código
- Seção de serviços principais
- Estatísticas da empresa
- Seção de features/benefícios
- **Nova seção de blog** com últimas notícias
- Design responsivo e moderno

### 💻 Página Desenvolvimento Web
- Serviços de desenvolvimento web
- Tecnologias utilizadas
- Portfólio de projetos

### 📱 Página Aplicações Mobile
- Serviços de desenvolvimento mobile
- Tecnologias nativas e híbridas
- Cases de sucesso

### ⚡ Página Sistemas Empresariais
- Soluções empresariais
- Sistemas personalizados
- Tecnologias enterprise

### 🏢 Página Consultoria em TI
- Serviços de consultoria
- Arquitetura de soluções
- Planejamento tecnológico

### ℹ️ Página Sobre
- Informações sobre a empresa
- Missão, visão e valores
- Equipe e experiência

### 📞 Página Contato
- Formulário de contato
- Informações de contato
- Integração com dados estáticos

## 🎨 Componentes

### Navbar
- Navegação responsiva
- Links para todas as páginas
- Design moderno e limpo
- Logo da empresa

### BlogNews (Novo)
- **Localização**: `src/components/Home/BlogNews.jsx`
- **Estilização**: `src/components/Home/BlogNews.css`
- **Funcionalidades**:
  - Exibe as últimas notícias do blog
  - Cards responsivos com imagens
  - Informações completas (autor, data, tempo de leitura)
  - Tags categorizadas
  - Efeitos hover e animações
  - Design moderno e acessível
- **Dados**: Inclui 3 notícias de exemplo sobre tecnologia
- **Integração**: Adicionado na página Home após a seção de estatísticas

## 📊 Dados

O projeto utiliza dados estáticos organizados em:
- `homeData.js` - Dados da página inicial (hero, stats, features)
- `sobreData.js` - Dados da página sobre
- `contatoData.js` - Dados da página de contato

### Estrutura de Dados
Os dados são estruturados de forma modular e reutilizável, facilitando a manutenção e atualização do conteúdo.

## 🧪 Testes

### Estrutura de Testes
```
src/
├── __tests__/           # Testes do App principal
├── components/
│   ├── __tests__/      # Testes dos componentes
│   └── Home/
│       └── __tests__/  # Testes dos componentes da Home
└── pages/
    └── __tests__/      # Testes das páginas
```

### Componentes Testados
- **App**: Testes de renderização e estrutura principal
- **Navbar**: Testes de navegação e elementos
- **BlogNews**: Testes completos do componente de blog
- **Home**: Testes da página inicial e seus elementos

### Cobertura de Testes
- ✅ 34 testes implementados
- ✅ 100% dos componentes principais testados
- ✅ Testes de renderização, elementos e funcionalidades
- ✅ Testes responsivos e acessibilidade

## 🔧 Configuração

### ESLint
Configurado com regras para React e boas práticas de desenvolvimento.

### Vite
Configuração otimizada para desenvolvimento rápido e build eficiente.

### React Bootstrap
Framework CSS integrado para componentes responsivos e modernos.

### Testes
- **Vitest**: Framework de testes rápido e moderno
- **React Testing Library**: Biblioteca para testar componentes React
- **Jest DOM**: Matchers adicionais para DOM testing
- **User Event**: Simulação de interações do usuário

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

## 🚀 Funcionalidades Principais

### ✨ Recursos Implementados
- **Páginas Completas**: 7 páginas com conteúdo específico
- **Navegação Responsiva**: Menu adaptável para diferentes dispositivos
- **Componentes Modulares**: Estrutura organizada e reutilizável
- **Seção de Blog**: Últimas notícias com design moderno
- **Design Responsivo**: Adaptação para mobile, tablet e desktop
- **Dados Dinâmicos**: Estrutura modular para fácil atualização
- **Testes Unitários**: Cobertura completa de testes para componentes

### 🎯 Objetivos do Projeto
- Demonstrar habilidades em React e desenvolvimento web
- Criar uma aplicação completa e funcional
- Implementar boas práticas de desenvolvimento
- Utilizar tecnologias modernas e atuais

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

---

**Desenvolvido com ❤️ usando React, Vite e React Bootstrap**
