# @types/react - Guia Completo de Tipos TypeScript para React

## O que são as @types/react

@types/react é um pacote que fornece definições de tipos TypeScript para React. Este pacote é mantido no repositório DefinitelyTyped e permite que desenvolvedores usem React com TypeScript de forma type-safe.

### Informações do Pacote
- **Pacote**: @types/react
- **Versão Atual**: 19.1.9
- **Licença**: MIT
- **Repositório**: [DefinitelyTyped/react](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react)
- **Downloads Semanais**: ~47,5 milhões
- **Tamanho**: 806 kB

### Instalação
```bash
npm install --save-dev @types/react @types/react-dom
```

## Principais Tipos TypeScript para React

### Tipos Fundamentais

#### ReactNode
O tipo mais inclusivo para qualquer coisa que possa ser renderizada pelo React:
```typescript
interface Props {
  children?: React.ReactNode; // Aceita strings, números, JSX, arrays, etc.
}
```

#### ReactElement
Para elementos JSX específicos:
```typescript
interface Props {
  icon: React.ReactElement; // Apenas elementos JSX válidos
}
```

#### FC (FunctionComponent)
**Nota**: O uso de `React.FC` não é mais recomendado desde React 18.

```typescript
// ❌ Não recomendado (abordagem antiga)
const Component: React.FC<Props> = ({ children }) => { ... }

// ✅ Recomendado (abordagem moderna)
interface Props {
  message: string;
  children?: React.ReactNode;
}

const Component = ({ message, children }: Props) => {
  return <div>{message}{children}</div>;
}
```

#### Component (Class Components)
Para componentes baseados em classe:
```typescript
interface Props {
  name: string;
}

interface State {
  count: number;
}

class MyComponent extends React.Component<Props, State> {
  state = { count: 0 };
  
  render() {
    return <div>{this.props.name}: {this.state.count}</div>;
  }
}
```

## Props Typing e Interfaces

### Definindo Props com Interfaces
```typescript
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const Button = ({ text, variant = 'primary', disabled = false, onClick, children }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {text}
      {children}
    </button>
  );
};
```

### ComponentProps Utility Type
Para herdar props de elementos HTML:
```typescript
// Herda todas as props nativas de um button
interface CustomButtonProps extends React.ComponentProps<'button'> {
  variant: 'primary' | 'secondary';
}

const CustomButton = ({ variant, ...buttonProps }: CustomButtonProps) => {
  return <button {...buttonProps} className={`btn-${variant}`} />;
};
```

### Tipos para Styling
```typescript
interface StyledProps {
  style?: React.CSSProperties;
  className?: string;
}
```

## Event Handlers e Tipos de Eventos

### Tipos Comuns de Eventos
```typescript
interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Form = ({ onSubmit, onChange, onClick }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onChange} onKeyPress={(e) => e.key === 'Enter' && handleSubmit} />
      <button onClick={onClick}>Submit</button>
    </form>
  );
};
```

### Event Handler Genérico
```typescript
// Para eventos sintéticos genéricos
const handleEvent = (event: React.SyntheticEvent) => {
  event.preventDefault();
};
```

## Hooks Typing

### useState
```typescript
// Inferência automática
const [name, setName] = useState(''); // string
const [count, setCount] = useState(0); // number

// Tipagem explícita
const [user, setUser] = useState<User | null>(null);

// Union types
type Status = 'idle' | 'loading' | 'success' | 'error';
const [status, setStatus] = useState<Status>('idle');

// Arrays
const [items, setItems] = useState<string[]>([]);

// Objetos complexos
interface UserState {
  id: number;
  name: string;
  email: string;
}
const [user, setUser] = useState<UserState>({
  id: 0,
  name: '',
  email: ''
});
```

### useEffect
```typescript
// useEffect não precisa de tipagem explícita
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

// Com cleanup
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);

// Async operations (não retorna Promise diretamente)
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchData();
}, []);
```

### useContext
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// Criando o contexto com tipo padrão
const UserContext = React.createContext<UserContextType | undefined>(undefined);

// Provider
const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook customizado para usar o contexto
const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Uso do contexto
const Profile = () => {
  const { user, logout } = useUser();
  
  if (!user) return <div>Not logged in</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
```

### useReducer
```typescript
interface State {
  count: number;
  loading: boolean;
}

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set_loading'; payload: boolean }
  | { type: 'reset' };

const initialState: State = {
  count: 0,
  loading: false
};

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'set_loading':
      return { ...state, loading: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {state.loading && <p>Loading...</p>}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};
```

### useRef
```typescript
// Para elementos DOM
const inputRef = useRef<HTMLInputElement>(null);

// Para valores mutáveis
const countRef = useRef<number>(0);

// Para objetos personalizados
interface TimerRef {
  start: () => void;
  stop: () => void;
}
const timerRef = useRef<TimerRef | null>(null);

const Example = () => {
  useEffect(() => {
    // Type guard necessário para elementos DOM
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <input ref={inputRef} />;
};
```

## Exemplos Práticos de Uso

### Componente de Formulário Completo
```typescript
interface FormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  loading?: boolean;
}

const LoginForm = ({ onSubmit, loading = false }: LoginFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
```

### Higher-Order Component (HOC)
```typescript
interface WithLoadingProps {
  loading: boolean;
}

function withLoading<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return ({ loading, ...props }) => {
    if (loading) {
      return <div>Loading...</div>;
    }
    return <Component {...(props as P)} />;
  };
}

// Uso
interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

const UserListWithLoading = withLoading(UserList);

// Uso do componente
<UserListWithLoading users={users} loading={isLoading} />
```

### Custom Hook Tipado
```typescript
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// Uso do hook
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile = ({ userId }: { userId: number }) => {
  const { data: user, loading, error, refetch } = useApi<User>(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
};
```

## Diferenças entre Versões

### React 18 - Mudanças Importantes
- **Remoção de `children` implícito**: `React.FC` não inclui mais automaticamente a prop `children`
- **Tipagem explícita necessária**: Agora é necessário definir explicitamente `children?: React.ReactNode`

```typescript
// Antes do React 18
const Component: React.FC = ({ children }) => { ... }

// React 18+
interface Props {
  children?: React.ReactNode;
}
const Component = ({ children }: Props) => { ... }
// OU
const Component: React.FC<{ children?: React.ReactNode }> = ({ children }) => { ... }
```

### React 19 - Melhorias e Mudanças
- **Codemod automático**: React fornece `types-react-codemod` para migração automática
- **Melhor suporte TypeScript**: Integração aprimorada com ferramentas TypeScript
- **Tipos mais refinados**: Limpeza e refinamento das definições de tipos

```bash
# Migração automática para React 19
npx types-react-codemod@latest preset-19 ./path-to-app
```

### Compatibilidade de Versões
⚠️ **Importante**: Mantenha @types/react e react na mesma versão principal para evitar incompatibilidades:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

## Utility Types Úteis

### React Utility Types
```typescript
// ComponentProps - extrai props de um componente
type ButtonProps = React.ComponentProps<'button'>;
type DivProps = React.ComponentProps<'div'>;

// ComponentPropsWithRef - inclui ref
type ButtonWithRefProps = React.ComponentPropsWithRef<'button'>;

// ElementType - para componentes polimórficos
interface PolymorphicProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

// HTMLAttributes para elementos específicos
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
```

### TypeScript Utility Types com React
```typescript
// Partial - torna todas as propriedades opcionais
interface UserForm {
  name: string;
  email: string;
  age: number;
}
type PartialUserForm = Partial<UserForm>; // Todas as props são opcionais

// Pick - seleciona propriedades específicas
type UserBasicInfo = Pick<User, 'name' | 'email'>;

// Omit - remove propriedades específicas
type UserWithoutId = Omit<User, 'id'>;

// Required - torna todas as propriedades obrigatórias
interface OptionalProps {
  name?: string;
  email?: string;
}
type RequiredProps = Required<OptionalProps>;
```

## Links para Documentação Oficial

### Documentação Principal
- [React TypeScript - Documentação Oficial](https://react.dev/learn/typescript)
- [TypeScript Handbook - React](https://www.typescriptlang.org/docs/handbook/react.html)
- [@types/react - NPM](https://www.npmjs.com/package/@types/react)
- [DefinitelyTyped Repository](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react)

### Recursos Adicionais
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)

### Ferramentas e Codemods
- [types-react-codemod](https://github.com/eps1lon/types-react-codemod) - Para migração automática
- [TypeScript Playground](https://www.typescriptlang.org/play) - Para testar tipos React
- [React DevTools](https://react.dev/learn/react-developer-tools) - Debugging com TypeScript

Este guia fornece uma base sólida para trabalhar com @types/react e TypeScript em projetos React modernos, cobrindo desde conceitos básicos até padrões avançados e melhores práticas.