# React DOM - Documentação Completa

## O que é React DOM?

React DOM é um pacote específico para aplicações web que rodam em ambientes de navegador DOM. Ele fornece métodos DOM-específicos que podem ser usados no nível superior da sua aplicação e serve como uma válvula de escape para sair do modelo React quando necessário.

### Características principais:
- Responsável por renderizar elementos ou componentes React no DOM real da página web
- Fornece uma maneira eficiente de gerenciar elementos DOM da página web
- Suporta tanto renderização do lado cliente quanto do lado servidor
- Não é suportado para React Native

## Como se relaciona com React

React DOM trabalha em conjunto com React para aplicações web:
- **React**: Biblioteca principal para criar interfaces de usuário
- **React DOM**: Ponte entre React e o DOM do navegador
- React utiliza um Virtual DOM para eficiência, e React DOM é responsável por sincronizar essas mudanças com o DOM real

## Principais Métodos e APIs

### APIs Principais (react-dom)

#### 1. createPortal
```javascript
import { createPortal } from 'react-dom';

// Permite renderizar componentes filhos em diferentes partes da árvore DOM
createPortal(child, container)
```

**Casos de uso:**
- Modais
- Tooltips
- Popups
- Toasts

#### 2. flushSync
```javascript
import { flushSync } from 'react-dom';

// Força React a atualizar o estado e DOM sincronamente
flushSync(() => {
  setCount(count + 1);
});
// Neste ponto, o DOM já foi atualizado
```

**Importante:** Use flushSync como último recurso, pode impactar significativamente a performance.

#### 3. findDOMNode (Depreciado)
- API depreciada que será removida em versões futuras
- Fornecia acesso ao nó DOM subjacente
- Substituído por abordagens baseadas em refs

### APIs de Pré-carregamento de Recursos

- `prefetchDNS`: Pré-busca endereço IP para conexões de domínio esperadas
- `preconnect`: Conecta a servidores de recursos potenciais
- `preload`: Busca stylesheets, fontes, imagens ou scripts externos
- `preloadModule`: Busca módulos ESM
- `preinit`: Busca e avalia scripts ou insere stylesheets
- `preinitModule`: Busca e avalia módulos ESM

## Diferenças entre react-dom/client e react-dom/server

### react-dom/client
**Propósito:** Renderização do lado cliente (navegador)

#### createRoot()
```javascript
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

**Quando usar:** Para renderização puramente do lado cliente onde não existe HTML renderizado pelo servidor.

#### hydrateRoot()
```javascript
import { hydrateRoot } from 'react-dom/client';

const container = document.getElementById('root');
hydrateRoot(container, <App />);
```

**Quando usar:** Para hidratar um contêiner cujo conteúdo HTML foi previamente renderizado por react-dom/server.

### react-dom/server
**Propósito:** Renderização do lado servidor (SSR)

#### APIs para Node.js Streams:
- `renderToPipeableStream`: Renderiza árvore React para Node.js Stream

#### APIs para Web Streams:
- `renderToReadableStream`: Renderiza árvore React para Readable Web Stream

#### APIs Legadas:
```javascript
import { renderToString } from 'react-dom/server';

const html = renderToString(<App />);
```

- `renderToString`: Renderiza árvore React para string
- `renderToStaticMarkup`: Renderiza árvore React não-interativa para string

## Exemplos de Uso

### Exemplo Básico - Renderização Client-side
```javascript
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Hello, World!</h1>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

### Exemplo SSR + Hidratação
```javascript
// Server (Node.js)
import { renderToString } from 'react-dom/server';

const html = renderToString(<App />);

// Client
import { hydrateRoot } from 'react-dom/client';

const container = document.getElementById('root');
hydrateRoot(container, <App />);
```

### Exemplo createPortal
```javascript
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
}
```

## Suporte a Navegadores

- Suporta navegadores populares, incluindo Internet Explorer 9 e superior
- Alguns polyfills são necessários para navegadores mais antigos como IE 9 e IE 10

## APIs Removidas no React 19

As seguintes APIs foram removidas:
- `findDOMNode`
- `hydrate`
- `render`
- `unmountComponentAtNode`
- `renderToNodeStream`
- `renderToStaticNodeStream`

## Links para Documentação Oficial

- **Documentação Principal React DOM**: https://react.dev/reference/react-dom
- **APIs Client**: https://react.dev/reference/react-dom/client
- **APIs Server**: https://react.dev/reference/react-dom/server
- **createPortal**: https://react.dev/reference/react-dom/createPortal
- **flushSync**: https://react.dev/reference/react-dom/flushSync
- **hydrateRoot**: https://react.dev/reference/react-dom/client/hydrateRoot

## Notas Importantes

1. **Frameworks**: A maioria dos frameworks React chama essas APIs automaticamente
2. **Componentes**: A maioria dos componentes individuais não precisará importar ou usar essas APIs diretamente
3. **Performance**: Use APIs como `flushSync` com moderação para evitar impactos na performance
4. **SSR**: As APIs de streaming oferecem mais funcionalidades comparadas aos métodos legados de renderização para string

Esta documentação fornece uma visão abrangente do React DOM, suas APIs principais, diferenças entre client e server, exemplos práticos e links para a documentação oficial atualizada.