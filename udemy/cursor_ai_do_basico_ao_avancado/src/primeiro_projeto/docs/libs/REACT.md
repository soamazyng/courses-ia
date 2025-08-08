# React.js - Documentação Completa

## O que é React?

React é uma biblioteca JavaScript para construir interfaces de usuário, particularmente aplicações web e nativas. Foi criado pelo Facebook e agora é mantido pela Meta e pela comunidade open-source. React separa preocupações com unidades fracamente acopladas chamadas "componentes" que contêm tanto markup quanto lógica. Esses componentes podem ser compostos juntos para criar uma UI completa, e React abstrai muito do trabalho de renderização, deixando você se concentrar no design da UI.

### Características Principais:
- **Baseado em componentes**: Construa componentes encapsulados que gerenciam seu próprio estado
- **Declarativo**: Descreva como a UI deve parecer para qualquer estado dado
- **Aprenda uma vez, escreva em qualquer lugar**: Pode ser usado para web, mobile e desktop

## Principais Conceitos

### 1. Componentes

Componentes são os blocos de construção centrais das aplicações React. São funções JavaScript que retornam markup (JSX).

**Exemplo de Componente Básico:**
```javascript
function MyButton() {
  return <button>I'm a button</button>;
}

// Usando o componente
function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

### 2. Hooks

Hooks são funções que permitem "conectar-se" aos recursos de estado e ciclo de vida do React a partir de componentes funcionais. Foram adicionados no React 16.8 e devem seguir regras específicas.

**Regras dos Hooks:**
- Chame Hooks apenas no nível superior de funções React
- Não chame Hooks dentro de loops, condições ou funções aninhadas
- Chame Hooks apenas de componentes funcionais React ou Hooks customizados

**Principais Categorias de Hooks:**

**State Hooks:**
```javascript
import { useState, useReducer } from 'react';

// useState - para gerenciamento de estado simples
function Counter() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// useReducer - para lógica de estado complexa
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

**Effect Hooks:**
```javascript
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Conectar ao sistema externo
    fetch('/api/data')
      .then(response => response.json())
      .then(setData);
    
    // Função de cleanup (opcional)
    return () => {
      // Código de limpeza aqui
    };
  }, []); // Array de dependência vazio significa executar uma vez na montagem
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

### 3. JSX (JavaScript XML)

JSX é uma extensão de sintaxe para JavaScript que permite escrever sintaxe similar ao HTML no seu código JavaScript. Torna os componentes React mais legíveis e expressivos.

**Regras e Recursos do JSX:**
- Deve retornar um único elemento pai (ou usar React Fragments)
- Use `className` em vez de `class`
- Use camelCase para atributos HTML
- Feche todas as tags, incluindo auto-fechadas (`<br />`)
- Incorpore expressões JavaScript com chaves `{}`

**Exemplos de JSX:**
```javascript
// JSX básico
const element = <h1>Hello, world!</h1>;

// JSX com expressões
const name = 'React';
const element = <h1>Hello, {name}!</h1>;

// JSX com atributos
const element = <img src={user.avatarUrl} alt={user.name} />;

// JSX com renderização condicional
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign up.</h1>
      )}
    </div>
  );
}

// JSX com listas
function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

## Instalação e Configuração

### Pré-requisitos
- **Node.js**: Versão 18+ requerida (para Vite 5.0+)
- Gerenciador de pacotes **npm** ou **yarn**

### Opção 1: Vite (Recomendado para 2025)
Vite é agora a ferramenta de build recomendada para aplicações React, oferecendo desenvolvimento rápido e builds otimizados.

```bash
# Criar novo projeto Vite + React
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev

# Alternativa com yarn
yarn create vite my-react-app --template react
cd my-react-app
yarn install
yarn dev

# Com template TypeScript
npm create vite@latest my-react-app -- --template react-ts
```

### Opção 2: Next.js (Framework Full-Stack)
Para aplicações que requerem renderização do lado servidor ou geração estática:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

## Exemplos Básicos de Uso

### 1. Aplicação Contador Simples
```javascript
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
```

### 2. Aplicação Lista de Tarefas
```javascript
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

## Links para Documentação Oficial

- **Documentação Principal**: https://react.dev/
- **Guia de Início Rápido**: https://react.dev/learn
- **Referência React**: https://react.dev/reference/react
- **Hooks Integrados**: https://react.dev/reference/react/hooks
- **Tutorial (Jogo da Velha)**: https://react.dev/learn/tutorial-tic-tac-toe
- **Criando Apps React**: https://react.dev/learn/creating-a-react-app
- **Documentação Legada**: https://legacy.reactjs.org/

## Recursos Adicionais

- **Documentação Vite**: https://vite.dev/guide/
- **Documentação Next.js**: https://nextjs.org/docs
- **React DevTools**: Extensão de navegador para debug de aplicações React
- **Comunidade React**: https://react.dev/community
- **Tutorial MDN React**: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started

Este guia abrangente cobre todos os aspectos essenciais do React.js, desde conceitos básicos até exemplos de implementação prática, fornecendo tudo o que você precisa para começar a construir aplicações React em 2025.