# @vitejs/plugin-react - Documentação Completa

## O que é o Plugin

O `@vitejs/plugin-react` é o plugin oficial do Vite para projetos React. É uma solução all-in-one que fornece suporte completo para desenvolvimento React com Vite, incluindo transformação JSX, Fast Refresh, e integração com o ecossistema Babel.

**Características principais:**
- Plugin oficial mantido pela equipe do Vite
- Suporte completo para React >= 16.9
- Integração nativa com Fast Refresh
- Flexibilidade para usar transformações Babel customizadas
- Pacote leve com alta performance

## Como Funciona a Integração React + Vite

A integração React + Vite funciona através de múltiplas camadas de transformação:

1. **esbuild**: Usado para transpilação rápida de TypeScript/JavaScript
2. **Babel**: Usado para transformações específicas do React e plugins customizados
3. **Fast Refresh**: Implementação do Hot Module Replacement específica para React
4. **JSX Runtime**: Suporte automático para a nova sintaxe JSX (React 17+)

**Fluxo de desenvolvimento:**
```
Código React → esbuild (transpilação) → Babel (transformações) → Fast Refresh (HMR)
```

**Fluxo de produção:**
```
Código React → esbuild (build otimizado) → Bundle final
```

## Instalação e Configuração Básica

### Instalação
```bash
npm i @vitejs/plugin-react
# ou
yarn add @vitejs/plugin-react
# ou
pnpm add @vitejs/plugin-react
```

### Configuração Básica
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## Opções de Configuração Disponíveis

### 1. **include/exclude**
Controla quais arquivos são processados pelo plugin:

```javascript
react({
  include: /\.(mdx|js|jsx|ts|tsx)$/,
  exclude: /node_modules/
})
```

### 2. **jsxImportSource**
Define de onde a factory JSX é importada:

```javascript
react({
  jsxImportSource: '@emotion/react' // Para Emotion
})
```

### 3. **jsxRuntime**
Controla o runtime JSX usado:

```javascript
react({
  jsxRuntime: 'classic' // Usa o runtime clássico ao invés do automático
})
```

### 4. **babel**
Configuração avançada do Babel:

```javascript
react({
  babel: {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import'
    ],
    babelrc: true,      // Usa arquivos .babelrc
    configFile: true    // Usa babel.config.js
  }
})
```

### 5. **fastRefresh**
Habilita/desabilita Fast Refresh:

```javascript
react({
  fastRefresh: true // Padrão: true em desenvolvimento
})
```

## Diferenças entre plugin-react e plugin-react-swc

### @vitejs/plugin-react (Babel)

**Vantagens:**
- Ecossistema Babel robusto com milhares de plugins
- Máxima compatibilidade com transformações customizadas
- Documentação extensa e comunidade ativa
- Ideal para projetos que precisam de transformações específicas

**Desvantagens:**
- Mais lento que SWC para projetos grandes
- Maior overhead durante o desenvolvimento

### @vitejs/plugin-react-swc (SWC)

**Vantagens:**
- Performance significativamente superior (~20x mais rápido que Babel)
- Cold start e HMR mais rápidos
- Ideal para projetos grandes sem necessidades específicas do Babel
- Menor uso de recursos

**Desvantagens:**
- Ecossistema de plugins limitado comparado ao Babel
- Pode ter incompatibilidades com algumas transformações específicas

### Quando Usar Cada Um

**Use @vitejs/plugin-react quando:**
- Projeto requer plugins Babel específicos
- Necessita transformações customizadas complexas
- Compatibilidade máxima é prioridade
- Projeto pequeno a médio onde performance não é crítica

**Use @vitejs/plugin-react-swc quando:**
- Performance é prioridade (projetos grandes)
- Não necessita transformações Babel específicas
- Quer startup mais rápido e HMR mais ágil
- Projeto novo sem dependências legadas do Babel

## Fast Refresh / HMR para React

### O que é Fast Refresh

Fast Refresh é a implementação do Hot Module Replacement específica para React que:
- Preserva o estado dos componentes durante atualizações
- Atualiza apenas os componentes modificados
- Mantém a posição do scroll e foco
- Fornece feedback instantâneo durante desenvolvimento

### Configuração HMR

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      port: 3001, // Porta customizada para HMR
      host: 'localhost'
    },
    watch: {
      usePolling: true // Para ambientes Docker/WSL
    }
  }
})
```

### Limitações do Fast Refresh

1. **Mudanças em Hooks**: Adicionar/remover hooks causa reload completo
2. **Exports não-componente**: Apenas componentes são hot-reloaded
3. **Componentes classe**: Suporte limitado comparado a componentes funcionais
4. **Sintaxe de export**: Funciona melhor com `export default function`

### Melhores Práticas para HMR

```javascript
// ✅ Recomendado - um componente por arquivo
export default function MyComponent() {
  return <div>Hello World</div>
}

// ❌ Evitar - múltiplos exports
export const Component1 = () => <div>1</div>
export const Component2 = () => <div>2</div>
```

## Exemplos de Configuração

### Configuração Básica para TypeScript
```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

### Configuração com Emotion
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ]
})
```

### Configuração para Styled-Components
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    })
  ]
})
```

### Configuração com MDX
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    mdx()
  ]
})
```

### Configuração para Docker/WSL
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexões externas
    port: 3000,
    watch: {
      usePolling: true, // Necessário para Docker/WSL
      interval: 1000
    },
    hmr: {
      port: 3001
    }
  }
})
```

## Links para Documentação Oficial

### Documentação Principal
- **Vite Official Guide**: https://vite.dev/guide/
- **Vite Plugins**: https://vite.dev/plugins/
- **Vite Features**: https://vite.dev/guide/features

### Repositórios GitHub
- **@vitejs/plugin-react**: https://github.com/vitejs/vite-plugin-react
- **@vitejs/plugin-react-swc**: https://github.com/vitejs/vite-plugin-react-swc
- **Vite Core**: https://github.com/vitejs/vite

### NPM Packages
- **@vitejs/plugin-react**: https://www.npmjs.com/package/@vitejs/plugin-react
- **@vitejs/plugin-react-swc**: https://www.npmjs.com/package/@vitejs/plugin-react-swc

### React Documentation
- **React Fast Refresh**: https://reactnative.dev/docs/fast-refresh
- **React DevTools**: https://react.dev/learn/react-developer-tools

### HMR e Development
- **Vite HMR API**: https://vite.dev/guide/api-hmr
- **Hot Module Replacement**: https://webpack.js.org/concepts/hot-module-replacement/

### Tutoriais e Guias
- **Getting Started with Vite**: https://vite.dev/guide/
- **Migrating from Create React App**: https://vite.dev/guide/migration.html

## Informações de Versão

- **Versão Atual**: 4.7.0
- **Última Atualização**: 14 dias atrás
- **Downloads Semanais**: ~10,5 milhões
- **Licença**: MIT
- **Requisitos**: React >= 16.9, Node.js >= 14.18+