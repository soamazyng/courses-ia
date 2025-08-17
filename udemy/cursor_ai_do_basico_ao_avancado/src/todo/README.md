# 📝 Todo List - Organize suas Tarefas

Uma aplicação web moderna e responsiva para gerenciar suas tarefas diárias, construída com HTML, CSS e JavaScript puro.

## ✨ Características

- **Interface Moderna**: Design limpo e intuitivo com animações suaves
- **Totalmente Responsiva**: Funciona perfeitamente em dispositivos móveis e desktop
- **Persistência Local**: Suas tarefas são salvas automaticamente no navegador
- **Sistema de Filtros**: Visualize todas, pendentes ou concluídas
- **Detecção Automática de Prioridade**: Baseada no texto da tarefa
- **Notificações**: Feedback visual para todas as ações
- **Atalhos de Teclado**: Navegação rápida e eficiente
- **Acessibilidade**: Suporte completo para leitores de tela

## 🚀 Funcionalidades

### Gerenciamento de Tarefas
- ✅ Adicionar novas tarefas
- ✅ Marcar como concluída/pendente
- ✅ Editar tarefas existentes
- ✅ Excluir tarefas
- ✅ Detecção automática de prioridade
- 💾 Persistência automática no localStorage
- 📤 Exportar backup das tarefas
- 📥 Importar backup de tarefas
- 🗑️ Gerenciar dados do storage

### Filtros e Organização
- 🔍 Visualizar todas as tarefas
- ⏰ Filtrar por tarefas pendentes
- ✅ Filtrar por tarefas concluídas
- 📊 Contadores em tempo real

### Experiência do Usuário
- 🎨 Animações suaves e transições
- 📱 Design responsivo para todos os dispositivos
- 🔔 Notificações toast para feedback
- ⌨️ Atalhos de teclado intuitivos
- 🎯 Estado vazio elegante

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com variáveis CSS e flexbox
- **JavaScript ES6+**: Funcionalidades robustas e organizadas
- **Font Awesome**: Ícones bonitos e consistentes
- **LocalStorage**: Persistência de dados no navegador

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout otimizado para telas grandes
- **Tablet**: Adaptação para dispositivos médios
- **Mobile**: Interface otimizada para smartphones
- **Touch**: Suporte para gestos de toque

## ⌨️ Atalhos de Teclado

- **Enter**: Adicionar tarefa
- **Ctrl/Cmd + Enter**: Adicionar tarefa
- **Escape**: Limpar campo de input
- **Ctrl/Cmd + K**: Focar no campo de input

## 🎨 Sistema de Cores

- **Primária**: Azul índigo (#6366f1)
- **Sucesso**: Verde esmeralda (#10b981)
- **Aviso**: Amarelo âmbar (#f59e0b)
- **Perigo**: Vermelho (#ef4444)
- **Secundária**: Cinza (#64748b)

## 📁 Estrutura do Projeto

```
todo/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica JavaScript
└── README.md           # Documentação do projeto
```

## 🚀 Como Usar

1. **Abra o arquivo** `index.html` em seu navegador
2. **Digite uma tarefa** no campo de input
3. **Pressione Enter** ou clique em "Adicionar"
4. **Gerencie suas tarefas** usando os controles disponíveis
5. **Use os filtros** para organizar sua visualização

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Cor principal */
    --success-color: #10b981;    /* Cor de sucesso */
    --danger-color: #ef4444;     /* Cor de perigo */
    /* ... outras cores */
}
```

### Adicionar Novas Funcionalidades
O código JavaScript está organizado em uma classe `TodoList` que pode ser facilmente estendida:

```javascript
class TodoList {
    // Adicione novos métodos aqui
    addNewFeature() {
        // Sua nova funcionalidade
    }
}
```

## 🌟 Recursos Avançados

- **Detecção de Prioridade**: Palavras-chave como "urgente", "importante" ou "!" definem prioridade alta
- **Formatação de Data**: Exibe "Hoje", "Ontem" ou data relativa
- **Animações CSS**: Transições suaves para melhor UX
- **Validação de Input**: Previne tarefas vazias
- **Confirmações**: Diálogos de confirmação para ações destrutivas

## 📊 Armazenamento

As tarefas são salvas automaticamente no `localStorage` do navegador:

- **Persistência**: Dados sobrevivem a fechamentos do navegador
- **Estrutura**: Cada tarefa inclui ID, texto, status, data e prioridade
- **Backup**: Exporte seus dados em formato JSON
- **Restauração**: Importe backups salvos anteriormente
- **Gerenciamento**: Limpe o storage quando necessário
- **Segurança**: Tratamento de erros para localStorage cheio ou indisponível

## 🎯 Melhorias Futuras

- [ ] Sincronização com nuvem
- [ ] Categorias e tags
- [ ] Lembretes e notificações push
- [ ] Temas escuro/claro
- [ ] Exportação para diferentes formatos
- [ ] Compartilhamento de listas
- [ ] Estatísticas e relatórios

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Reportar bugs
2. Sugerir novas funcionalidades
3. Enviar pull requests
4. Melhorar a documentação

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido com ❤️ e JavaScript puro.

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**
