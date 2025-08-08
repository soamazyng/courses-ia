# Documentação Completa do React Router DOM

## O que é React Router DOM

React Router DOM é uma biblioteca de roteamento para aplicações React que permite criar aplicações de página única (SPA) com navegação dinâmica. É descrito como "um roteador focado no usuário, baseado em padrões, multi-estratégico que você pode implantar em qualquer lugar".

### Principais Características:
- **Versão atual**: v7 (com upgrade não-destrutivo do v6)
- **Downloads npm**: Mais de 2,5 bilhões
- **Contribuidores GitHub**: 1,213
- **Stars GitHub**: 55,286
- **Dependentes**: 3,597,612

## Instalação

```bash
npm install react-router-dom
```

## Principais Conceitos

### 1. **Roteamento Declarativo**
React Router permite definir rotas de forma declarativa usando componentes JSX, tornando a configuração de rotas intuitiva e fácil de manter.

### 2. **Navegação Programática**
Possibilita navegação através de código usando hooks como `useNavigate`, além da navegação tradicional com componentes `Link`.

### 3. **Gerenciamento de Estado de Localização**
Mantém sincronização entre a URL do navegador e o estado da aplicação React.

## Componentes Principais

### BrowserRouter

**Propósito**: Um roteador para uso em navegadores web que fornece as URLs mais limpas.

**Configuração Básica**:
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
```

### Routes e Route

**Configuração de Rotas**:
```javascript
import { Route, Routes } from "react-router-dom";
import { Home, Blog, Dashboard } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
```

### Link

**Navegação Básica**:
```javascript
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
```

### NavLink

**Navegação com Estados Ativos**:
```javascript
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/messages" 
        className={({ isActive, isPending }) => [
          isPending ? "pending" : "",
          isActive ? "active" : ""
        ].join(" ")}
      >
        Messages
      </NavLink>
      
      <NavLink 
        to="/profile" 
        style={({ isActive, isPending }) => ({
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black"
        })}
      >
        Profile
      </NavLink>
    </nav>
  );
}
```

## Hooks Principais

### useNavigate

**Navegação Programática**:
```javascript
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (formData) => {
    try {
      await login(formData);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      navigate('/error', { 
        state: { message: error.message } 
      });
    }
  };

  const goBack = () => {
    navigate(-1); // Volta uma página
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="button" onClick={goBack}>
        Voltar
      </button>
      <button type="submit">Login</button>
    </form>
  );
}
```

### useLocation

**Acesso a Informações da URL**:
```javascript
import { useLocation } from "react-router-dom";

function Analytics() {
  const location = useLocation();
  
  useEffect(() => {
    // Rastrear visualizações de página
    console.log('Current path:', location.pathname);
    console.log('Search params:', location.search);
    console.log('Hash:', location.hash);
    console.log('State:', location.state);
  }, [location]);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <p>Current Path: {location.pathname}</p>
      {location.state && (
        <p>Message: {location.state.message}</p>
      )}
    </div>
  );
}
```

### useParams

**Captura de Parâmetros da URL**:
```javascript
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId, section } = useParams();
  
  useEffect(() => {
    // Buscar dados do usuário com base no ID
    fetchUserData(userId);
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
      <p>Section: {section || 'overview'}</p>
    </div>
  );
}

// Rota correspondente: /user/:userId/:section?
```

## Configuração de Roteamento Básico

### Estrutura Simples
```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componentes de página
function Home() {
  return <h1>Página Inicial</h1>;
}

function About() {
  return <h1>Sobre Nós</h1>;
}

function Contact() {
  return <h1>Contato</h1>;
}

// Componente principal
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Configuração de Roteamento Avançado

### Rotas Aninhadas
```javascript
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet /> {/* Renderiza rotas filhas */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="stats">Stats</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="stats" element={<Stats />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
```

### Proteção de Rotas
```javascript
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

// Uso
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

### Tratamento de Erros (404)
```javascript
function NotFound() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <Link to="/">Voltar ao início</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Rota catch-all para 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```

## Exemplo Prático Completo

```javascript
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useParams,
  useLocation,
  Navigate
} from 'react-router-dom';

// Componente de autenticação simulada
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  
  return { isAuthenticated, login, logout };
};

// Layout principal
function Layout() {
  const { isAuthenticated, logout } = useAuth();
  
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

// App principal
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
```

## Links para Documentação Oficial

- **Site Oficial**: https://reactrouter.com/
- **Documentação API v7**: https://api.reactrouter.com/v7/
- **GitHub Repository**: https://github.com/remix-run/react-router
- **NPM Package**: https://www.npmjs.com/package/react-router-dom
- **Discord Community**: https://rmx.as/discord
- **Twitter/X**: @ReactRouter
- **Discussões GitHub**: Para suporte e dúvidas da comunidade

## Conclusão

React Router DOM é uma biblioteca essencial para aplicações React modernas, oferecendo:

- **Roteamento declarativo** e intuitivo
- **Hooks poderosos** para navegação programática
- **Suporte a rotas aninhadas** e proteção de rotas
- **URLs limpas** e gerenciamento de estado de localização
- **Comunidade ativa** e documentação abrangente
- **Compatibilidade** com React 19 e atualizações não-destrutivas

A biblioteca continua evoluindo com foco na experiência do usuário e padrões modernos de desenvolvimento web.