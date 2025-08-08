# ESLint Plugin React Hooks - Documentação Completa

## O que é o plugin

O `eslint-plugin-react-hooks` é um plugin oficial do ESLint criado pela equipe do React que impõe as "Rules of Hooks" (Regras dos Hooks). Este plugin é essencial para garantir que os React Hooks sejam utilizados corretamente, prevenindo bugs sutis e difíceis de debugar.

## Instalação

```bash
# npm
npm install eslint-plugin-react-hooks --save-dev

# yarn
yarn add eslint-plugin-react-hooks --dev

# pnpm
pnpm add eslint-plugin-react-hooks --save-dev
```

## Configuração e Setup

### ESLint 9.0+ (Flat Config)

Para versões 6.0 e posteriores, use a configuração recomendada:

```javascript
import * as reactHooks from 'eslint-plugin-react-hooks';

export default [
  // ...
  reactHooks.configs.recommended,
];
```

Para versões 5.2.0 (primeira versão com suporte ao flat config):

```javascript
import * as reactHooks from 'eslint-plugin-react-hooks';

export default [
  // ...
  reactHooks.configs['recommended-latest'],
];
```

### ESLint Legacy (abaixo de 9.0.0)

```json
{
  "extends": [
    "plugin:react-hooks/recommended-legacy"
  ]
}
```

### Configuração Manual

```javascript
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Regras Principais

### 1. `react-hooks/rules-of-hooks` (error)

Esta regra impõe que os componentes sigam as Rules of Hooks ao usar Hooks.

**Regras fundamentais:**
- Hooks devem ser chamados apenas no nível superior do componente
- Não devem ser chamados condicionalmente
- Devem ser chamados em toda renderização, na mesma ordem

**Exemplo de violação:**
```javascript
// ❌ Incorreto: Hook chamado condicionalmente
function MyComponent({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // Violação!
  }
  return <div>Component</div>;
}
```

**Correção:**
```javascript
// ✅ Correto: Hook chamado no nível superior
function MyComponent({ condition }) {
  const [state, setState] = useState(0);
  
  if (condition) {
    // Lógica condicional dentro do hook
  }
  
  return <div>Component</div>;
}
```

### 2. `react-hooks/exhaustive-deps` (warn)

Esta regra verifica as dependências dos effects e pode ser configurada com a opção `additionalHooks`.

**Configuração com hooks customizados:**
```json
{
  "rules": {
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
    }]
  }
}
```

## Rules of Hooks Enforcement

As Rules of Hooks são duas regras fundamentais:

1. **Apenas chame Hooks no nível superior**
   - Não chame Hooks dentro de loops, condições ou funções aninhadas
   - Sempre use Hooks no nível superior da sua função React

2. **Apenas chame Hooks de funções React**
   - Não chame Hooks de funções JavaScript regulares
   - Chame Hooks apenas de componentes funcionais React ou hooks customizados

## Exemplos de Erros Comuns e Correções

### 1. Dependências Primitivas Ausentes

**Erro:**
```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count is: ${count}`);
}, []); // ❌ Dependência 'count' ausente
```

**Correção:**
```javascript
useEffect(() => {
  console.log(`Count is: ${count}`);
}, [count]); // ✅ Incluir dependência
```

### 2. Dependências de Função Ausentes

**Erro:**
```javascript
const MyComponent = ({ onChange }) => {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    onChange(value);
  }, [value]); // ❌ 'onChange' ausente
};
```

**Correção:**
```javascript
useEffect(() => {
  onChange(value);
}, [value, onChange]); // ✅ Incluir onChange
```

### 3. Problemas com Referências de Função

**Erro:**
```javascript
const myFunction = () => {
  // fazer algo
};

useEffect(() => {
  myFunction();
}, [myFunction]); // ❌ Função recriada a cada render
```

**Correção com useCallback:**
```javascript
const myFunction = useCallback(() => {
  // fazer algo
}, []);

useEffect(() => {
  myFunction();
}, [myFunction]); // ✅ Função memoizada
```

### 4. Dependências de Objeto

**Erro:**
```javascript
const MyComponent = ({ config }) => {
  useEffect(() => {
    // usar config
  }, [config]); // ❌ Objeto pode causar re-renders desnecessários
};
```

**Correções:**
```javascript
// Opção 1: Usar propriedade específica
useEffect(() => {
  // usar config.id
}, [config.id]);

// Opção 2: Memoizar com useMemo
const memoizedConfig = useMemo(() => config, [config.id, config.name]);
useEffect(() => {
  // usar memoizedConfig
}, [memoizedConfig]);
```

### 5. Stale Closure

**Erro:**
```javascript
const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      console.log(`Count is: ${count}`); // Sempre mostra 0
    }, 2000);
  }, []); // ❌ Closure obsoleto
};
```

**Correção:**
```javascript
// Opção 1: Incluir dependência
useEffect(() => {
  const interval = setInterval(() => {
    console.log(`Count is: ${count}`);
  }, 2000);
  
  return () => clearInterval(interval);
}, [count]);

// Opção 2: Usar ref
const countRef = useRef(count);
countRef.current = count;

useEffect(() => {
  const interval = setInterval(() => {
    console.log(`Count is: ${countRef.current}`);
  }, 2000);
  
  return () => clearInterval(interval);
}, []);
```

## Integração com ESLint

### Configuração no VS Code

Para melhor experiência de desenvolvimento, configure o ESLint no VS Code:

```json
// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Configuração com TypeScript

```json
// .eslintrc.json
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Mensagens de Erro Comuns

1. **"React Hook useEffect has a missing dependency"**
   - Adicionar a dependência ao array ou remover o array completamente

2. **"The 'function' makes the dependencies of useEffect Hook change on every render"**
   - Usar `useCallback` para memoizar a função

3. **"The 'object' makes the dependencies of useEffect Hook change on every render"**
   - Usar `useMemo` para memoizar o objeto ou usar propriedades específicas

## Melhores Práticas

1. **Sempre mantenha a regra habilitada**
   - A equipe do React recomenda fortemente manter essa regra ativa

2. **Use `useCallback` para funções**
   ```javascript
   const handleClick = useCallback(() => {
     // lógica do click
   }, [dependency]);
   ```

3. **Use `useMemo` para objetos e arrays**
   ```javascript
   const expensiveValue = useMemo(() => {
     return computeExpensiveValue(a, b);
   }, [a, b]);
   ```

4. **Prefira dependências explícitas**
   - Não desabilite a regra, prefira adicionar as dependências corretas

5. **Use hooks customizados com parcimônia**
   - Configure `additionalHooks` apenas quando necessário

## Links para Documentação Oficial

- [ESLint Plugin React Hooks - NPM](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [React Hooks Repository - GitHub](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [Rules of Hooks - React Documentation](https://legacy.reactjs.org/docs/hooks-rules.html)
- [ESLint Plugin React Hooks README](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md)
- [React DevTools](https://react.dev/learn/react-developer-tools)

## Licença

MIT License - Mantido pela equipe do React/Facebook.