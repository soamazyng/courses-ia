# 🚀 Nova Código - Projeto Simplificado

## 📋 Descrição

Site institucional da Nova Código, uma empresa de tecnologia especializada em desenvolvimento de software e soluções digitais. O projeto foi **simplificado** para focar no essencial, removendo complexidades desnecessárias.

## ✨ Funcionalidades Principais

- **Página Home**: Apresentação da empresa, serviços principais e blog de notícias
- **Página Sobre**: Missão, visão, valores e história da empresa
- **Página Contato**: Formulário simples de contato e informações da empresa
- **Dados Integrados**: Todo o conteúdo está diretamente nos componentes JSX
- **Design Responsivo**: Funciona perfeitamente em qualquer dispositivo
- **Componentes Reutilizáveis**: Estrutura modular e organizada

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **React Bootstrap** - Componentes CSS responsivos
- **React Router DOM** - Roteamento client-side
- **Vite** - Build tool rápida e moderna
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto (Ultra Simplificada)

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.jsx      # Navegação principal
│   └── Home/
│       └── BlogNews.jsx # Componente de notícias do blog
├── pages/              # Páginas da aplicação (com dados integrados)
│   ├── Home.jsx        # Página inicial + dados
│   ├── Sobre.jsx       # Sobre a empresa + dados
│   └── Contato.jsx     # Formulário de contato + dados

├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
└── main.jsx            # Ponto de entrada
```

## 🎯 Páginas e Funcionalidades

### 1. **Home** (`/`)
- Banner principal com estatísticas da empresa
- Seção de serviços principais (4 serviços)
- Seção de recursos/diferenciais
- Blog de notícias mais recentes
- Botões de call-to-action

### 2. **Sobre** (`/sobre`)
- Missão e visão da empresa
- Valores corporativos (6 valores)
- Timeline da empresa (6 marcos)
- Informações sobre a equipe

### 3. **Contato** (`/contato`)
- Formulário simples (nome, email, mensagem)
- Informações de contato da empresa
- Validação de formulário

## 🔧 Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd primeiro_projeto

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Scripts Disponíveis
```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
```

## 🎨 Design e UX

- **Interface Limpa**: Design minimalista e focado
- **Responsivo**: Funciona em todos os dispositivos
- **Acessível**: Seguindo boas práticas de acessibilidade
- **Performance**: Carregamento rápido e otimizado

## 📱 Responsividade

O projeto é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones
- 📱 Tablets  
- 💻 Desktops
- 🖥️ Monitores grandes

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servir Build
```bash
npm run preview
```

## 📝 Licença

Este projeto é de uso interno da Nova Código.

---

**Nova Código** - Transformando ideias em soluções digitais que funcionam! 🚀
