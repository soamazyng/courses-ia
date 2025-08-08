# Vite - Next Generation Frontend Tooling

## O que é Vite

Vite (palavra francesa para "rápido", pronunciado /vit/, como "veet") é uma nova geração de ferramentas de build frontend que melhora significativamente a experiência de desenvolvimento. Consiste em duas partes principais:

1. **Dev Server**: Servidor de desenvolvimento com recursos avançados sobre módulos ES nativos, incluindo Hot Module Replacement (HMR) extremamente rápido
2. **Build Command**: Comando de build que empacota seu código com Rollup, pré-configurado para gerar assets estáticos altamente otimizados para produção

## Principais Características e Vantagens

### 1. Módulos ES Nativos no Desenvolvimento
- Serve arquivos sob demanda sobre ESM nativo, sem necessidade de bundling
- Arquitetura moderna que carrega apenas os arquivos necessários quando solicitados
- Tempo de inicialização significativamente reduzido

### 2. Hot Module Replacement (HMR) Ultra-Rápido
- HMR que permanece rápido independentemente do tamanho da aplicação
- API HMR sobre ESM nativo
- Atualizações instantâneas e precisas sem recarregar a página

### 3. Suporte Out-of-the-box
- TypeScript, JSX, CSS e mais funcionalidades prontas para uso
- Transpilação de arquivos .ts sem verificação de tipos (apenas transpilação)
- Suporte nativo para diversos formatos de arquivo

### 4. Builds de Produção Otimizados
- Rollup pré-configurado com suporte a multi-página e modo biblioteca
- Builds altamente otimizados para hospedagem estática

### 5. Performance Superior
- Arquitetura de dev server que permite HMR rápido conforme projetos escalam
- Usa ferramentas nativas como esbuild e SWC para tarefas intensivas
- Pré-bundling com esbuild 10-100x mais rápido que bundlers JavaScript

### 6. Filosofia Lean Core
- Core framework-agnóstico com API pequena para manutenibilidade
- Sistema de plugins baseado no Rollup
- Extensível mas mantém simplicidade

## Como Configurar Projetos

### Configuração Básica - vite.config.js

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    hmr: true
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild'
  }
})
```

### Configuração com TypeScript - vite.config.ts

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    })
  ],
  server: {
    hmr: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

## Build Tools e Dev Server

### Arquitetura Dual

**Desenvolvimento (esbuild):**
- Pre-bundling de dependências usando esbuild
- Escrito em Go, 10-100x mais rápido que bundlers JavaScript
- Hot reloads ultrarrápidos

**Produção (Rollup):**
- Configuração Rollup otimizada out-of-the-box
- Melhor trade-off performance vs flexibilidade
- API de plugins flexível e madura

### Configurações de Build

```javascript
export default defineConfig({
  build: {
    // Desabilitar minificação ou especificar minificador
    minify: 'esbuild', // ou 'terser' ou false
    
    // Configurações Rollup diretas
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    
    // Modo watch
    watch: {},
    
    // Diretório de saída
    outDir: 'dist',
    
    // Assets inline threshold
    assetsInlineLimit: 4096
  }
})
```

### Modo Biblioteca

```javascript
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
```

## Plugins Principais

### Plugins Oficiais

```javascript
// React
import react from '@vitejs/plugin-react'
import reactSwc from '@vitejs/plugin-react-swc'

// Vue
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// Suporte Legacy
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(), // ou reactSwc() para usar SWC
    vue(),
    vueJsx(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
```

### Plugins Populares do Ecossistema

```javascript
// Compressão
import { compression } from 'vite-plugin-compression'

// PWA
import { VitePWA } from 'vite-plugin-pwa'

// SVG
import svgr from 'vite-plugin-svgr'

// Styling
import windicss from 'vite-plugin-windicss'

// Debugging
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    react(),
    compression(),
    VitePWA({
      registerType: 'autoUpdate'
    }),
    svgr(),
    windicss(),
    inspect() // apenas em desenvolvimento
  ]
})
```

## HMR (Hot Module Replacement)

### Configuração Básica do HMR

```javascript
export default defineConfig({
  server: {
    hmr: true, // Habilitar HMR
    watch: {
      usePolling: true // Útil para ambientes como WSL2
    }
  }
})
```

### Configuração Avançada do HMR

```javascript
export default defineConfig({
  server: {
    hmr: {
      port: 24678, // Porta customizada para HMR
      overlay: false, // Desabilitar overlay de erros
      protocol: 'ws' // ou 'wss' para seguro
    }
  }
})
```

### API HMR Manual

```javascript
// Uso da API HMR
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    // Lidar com o módulo atualizado
  })
  
  // Aceitar dependências específicas
  import.meta.hot.accept('./dependency.js', (newDep) => {
    // Atualizar dependência
  })
  
  // Disposal
  import.meta.hot.dispose(() => {
    // Limpeza antes da atualização
  })
}
```

### HMR para React

```javascript
// HMR Event Handler customizado
export function HMREventHandler(newModule) {
  const event = new CustomEvent('hot-module-reload', { 
    detail: { newModule } 
  });
  document.body.dispatchEvent(event);
}

if (import.meta.hot) {
  import.meta.hot.accept(HMREventHandler)
}
```

## Exemplos de Configuração

### Projeto React + TypeScript

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'axios']
        }
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
```

### Projeto Vue 3 + TypeScript

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8080,
    hmr: true
  },
  build: {
    target: 'esnext',
    minify: 'esbuild'
  }
})
```

### Configuração para Monorepo

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared/src'),
      '@ui': path.resolve(__dirname, '../ui-components/src')
    }
  },
  server: {
    fs: {
      allow: ['..'] // Permitir acesso ao diretório pai
    }
  }
})
```

## Links para Documentação Oficial

- **Site Principal**: https://vite.dev/
- **Guia de Início**: https://vite.dev/guide/
- **Por que Vite**: https://vite.dev/guide/why
- **Recursos**: https://vite.dev/guide/features
- **Configuração**: https://vite.dev/config/
- **API de Plugins**: https://vite.dev/guide/api-plugin
- **Build para Produção**: https://vite.dev/guide/build
- **API HMR**: https://vite.dev/guide/api-hmr
- **Plugins**: https://vite.dev/plugins/
- **GitHub Oficial**: https://github.com/vitejs/vite
- **Awesome Vite**: https://github.com/vitejs/awesome-vite

## Comandos Essenciais

```bash
# Criar novo projeto
npm create vite@latest my-project
cd my-project
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Build com watch mode
npm run build -- --watch
```

Esta documentação fornece uma visão abrangente do Vite, suas capacidades e como utilizá-lo efetivamente em projetos modernos de frontend em 2025.