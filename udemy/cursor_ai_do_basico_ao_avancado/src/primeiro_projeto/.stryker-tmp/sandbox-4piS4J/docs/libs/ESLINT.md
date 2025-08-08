# Documentação Completa do ESLint

## O que é ESLint

ESLint é um "linter JavaScript plugável" e uma ferramenta de código aberto desenvolvida para ajudar desenvolvedores a melhorar a qualidade do código e detectar erros potenciais. É mantido pela OpenJS Foundation e oferece alta configurabilidade e extensibilidade através de um ecossistema abrangente de plugins e regras.

**Características principais:**
- Ferramenta de análise estática de código
- Altamente configurável e extensível
- Suporte para JavaScript, TypeScript e outras linguagens através de plugins
- Integração com editores e ferramentas de build
- Sistema de regras flexível e plugável

## Como Funciona

### Processo de Linting
1. **Parsing**: ESLint analisa o código fonte e constrói uma Árvore de Sintaxe Abstrata (AST)
2. **Análise**: Aplica regras configuradas ao AST para identificar problemas
3. **Relatório**: Gera relatórios com erros, avisos e sugestões
4. **Correção**: Oferece correção automática para problemas que podem ser resolvidos automaticamente

### Arquitetura Core
- **Parser**: Converte código JavaScript em AST
- **Rules**: Validam expectativas específicas do código
- **Plugins**: Estendem funcionalidade com regras customizadas
- **Configurations**: Conjuntos predefinidos de regras
- **Formatters**: Controlam como os resultados são apresentados

## Configuração (eslint.config.js)

### Formato de Configuração Moderna (2025)

ESLint migrou para o formato "flat config", descontinuando o formato eslintrc. O arquivo de configuração deve ser colocado no diretório raiz e exportar um array de objetos de configuração.

#### Nomes de arquivo suportados:
- `eslint.config.js`
- `eslint.config.mjs`
- `eslint.config.cjs`
- Variantes TypeScript: `.ts`, `.mts`, `.cts`

#### Estrutura básica:

```javascript
// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
]);
```

#### Configuração completa com plugins:

```javascript
import jsdoc from "eslint-plugin-jsdoc";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    name: "main-config",
    files: ["**/*.js"],
    ignores: ["node_modules/**", "dist/**"],
    plugins: {
      jsdoc: jsdoc,
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error",
      semi: "error",
      "prefer-const": "error",
    },
  },
]);
```

### Propriedades de Configuração

- **name**: Identificador opcional para a configuração
- **files**: Padrões glob para arquivos correspondentes
- **ignores**: Padrões para excluir arquivos
- **rules**: Configurações de regras
- **plugins**: Plugins do ESLint
- **extends**: Herdar configurações de outras fontes
- **languageOptions**: Opções específicas da linguagem
- **settings**: Configurações compartilhadas entre regras

## Regras Principais

### Categorias de Regras

#### 1. Possible Problems (Problemas Possíveis)
Foca em erros lógicos potenciais no código:

```javascript
{
  rules: {
    "no-const-assign": "error",     // Proíbe reatribuição de const
    "no-dupe-keys": "error",        // Proíbe chaves duplicadas em objetos
    "no-unreachable": "error",      // Proíbe código inalcançável
    "no-unused-vars": "warn",       // Avisa sobre variáveis não utilizadas
  }
}
```

#### 2. Suggestions (Sugestões)
Propõe maneiras alternativas de escrever código:

```javascript
{
  rules: {
    "prefer-const": "error",        // Requer const para variáveis não reatribuídas
    "eqeqeq": "error",             // Requer === e !==
    "arrow-body-style": "warn",     // Requer chaves em arrow functions
    "no-var": "error",             // Proíbe uso de var
  }
}
```

#### 3. Layout & Formatting (Layout e Formatação)
Foca na aparência e estilo do código:

```javascript
{
  rules: {
    "unicode-bom": "error",        // Controla uso de BOM Unicode
  }
}
```

### Configurações Predefinidas

```javascript
// Configuração recomendada
import js from "@eslint/js";

export default defineConfig([
  js.configs.recommended,  // Regras recomendadas para evitar erros
  // js.configs.all,       // Todas as regras (não recomendado para produção)
]);
```

## Plugins Principais

### Configuração de Plugins

#### Plugin NPM:
```javascript
import example from "eslint-plugin-example";

export default defineConfig([{
  plugins: { example },
  rules: {
    "example/rule1": "warn"
  }
}]);
```

#### Plugin Local:
```javascript
import local from "./my-local-plugin.js";

export default defineConfig([{
  plugins: { local },
  rules: {
    "local/rule1": "warn"
  }
}]);
```

#### Plugin Virtual:
```javascript
import myRule from "./rules/my-rule.js";

export default defineConfig([{
  plugins: {
    local: {
      rules: { "my-rule": myRule }
    }
  },
  rules: {
    "local/my-rule": "warn"
  }
}]);
```

### Plugins Populares

- **@typescript-eslint/eslint-plugin**: TypeScript
- **eslint-plugin-react**: React
- **eslint-plugin-vue**: Vue.js
- **eslint-plugin-import**: Validação de imports
- **eslint-plugin-jsx-a11y**: Acessibilidade JSX
- **@stylistic/eslint-plugin**: Regras de estilo

## Integração com Editores

### VS Code
1. Instalar extensão ESLint oficial
2. Configurar auto-fix no save:

```json
// settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "vue"]
}
```

### Outros Editores
- **WebStorm**: Suporte nativo integrado
- **Sublime Text**: Plugin SublimeLinter-eslint
- **Vim/Neovim**: ALE ou coc-eslint
- **Emacs**: Flycheck ou LSP

## Integração com Build Tools

### Vite (2025 - Recomendado)

```bash
# Instalação
npm install eslint vite-plugin-eslint --save-dev
```

```javascript
// vite.config.js
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [eslint()]
});
```

### Webpack

```javascript
// webpack.config.js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'ts', 'vue'],
      fix: true,
    }),
  ],
};
```

### Scripts package.json

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.ts,.vue",
    "lint:fix": "eslint . --ext .js,.ts,.vue --fix"
  }
}
```

## Exemplos de Configuração

### Configuração React + TypeScript

```javascript
import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@typescript-eslint": typescript,
      react: react,
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "prefer-const": "error",
      semi: "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
```

### Configuração Node.js

```javascript
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
]);
```

### Configuração Vue 3

```javascript
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  {
    files: ["**/*.{js,vue}"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-unused-vars": "error",
    },
  },
]);
```

## Links para Documentação Oficial

- **Documentação Principal**: https://eslint.org/docs/latest/
- **Configuração**: https://eslint.org/docs/latest/use/configure/
- **Referência de Regras**: https://eslint.org/docs/latest/rules/
- **Plugins**: https://eslint.org/docs/latest/use/configure/plugins
- **Integrações**: https://eslint.org/docs/latest/use/integrations
- **Migração para v9**: https://eslint.org/docs/latest/use/configure/migration-guide
- **API Node.js**: https://eslint.org/docs/latest/integrate/nodejs-api

## Comandos CLI Essenciais

```bash
# Inicializar configuração
npx eslint --init

# Executar linting
npx eslint .

# Corrigir automaticamente
npx eslint . --fix

# Linting de arquivos específicos
npx eslint src/**/*.js

# Ignorar avisos, apenas erros
npx eslint . --quiet

# Formato de saída personalizado
npx eslint . --format json
```

Esta documentação fornece uma visão abrangente do ESLint atualizada para 2025, incluindo as mudanças mais recentes na configuração flat config e as melhores práticas de integração com ferramentas modernas de desenvolvimento.