// Classe principal da Todo List
class TodoList {
    constructor() {
        this.tasks = this.loadTasksFromStorage();
        this.currentFilter = this.loadFilterFromStorage();
        this.nextId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
        
        this.init();
    }

    loadTasksFromStorage() {
        try {
            const stored = localStorage.getItem('todoTasks');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Erro ao carregar tarefas do localStorage:', error);
            return [];
        }
    }

    loadFilterFromStorage() {
        try {
            return localStorage.getItem('todoFilter') || 'all';
        } catch (error) {
            console.error('Erro ao carregar filtro do localStorage:', error);
            return 'all';
        }
    }

    init() {
        this.bindEvents();
        this.applySavedFilter();
        this.renderTasks();
        this.updateStats();
        this.updateActionButtons();
        this.logStorageInfo();
    }

    logStorageInfo() {
        console.log('📊 Informações do Storage:');
        console.log(`   Tarefas carregadas: ${this.tasks.length}`);
        console.log(`   Filtro atual: ${this.currentFilter}`);
        console.log(`   Próximo ID: ${this.nextId}`);
        console.log(`   Tamanho dos dados: ${JSON.stringify(this.tasks).length} caracteres`);
        
        // Verificar espaço disponível no localStorage
        try {
            const testKey = '__storage_test__';
            const testValue = 'x'.repeat(1024 * 1024); // 1MB
            localStorage.setItem(testKey, testValue);
            localStorage.removeItem(testKey);
            console.log('   ✅ localStorage funcionando normalmente');
        } catch (e) {
            console.warn('   ⚠️ localStorage pode estar cheio ou não disponível');
        }
    }

    applySavedFilter() {
        // Aplicar o filtro salvo
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === this.currentFilter);
        });
    }

    bindEvents() {
        // Adicionar tarefa
        document.getElementById('addTaskBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filtros
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        // Botões de ação
        document.getElementById('clearCompletedBtn').addEventListener('click', () => this.clearCompleted());
        document.getElementById('clearAllBtn').addEventListener('click', () => this.clearAll());

        // Botões de storage
        document.getElementById('exportBtn').addEventListener('click', () => this.exportData());
        document.getElementById('clearStorageBtn').addEventListener('click', () => this.clearStorage());
        
        // Input de importação
        document.getElementById('importInput').addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.importData(e.target.files[0]);
                e.target.value = ''; // Limpar input
            }
        });

        // Delegate events para tarefas dinâmicas
        document.getElementById('tasksList').addEventListener('click', (e) => {
            this.handleTaskAction(e);
        });
    }

    addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();
        
        if (!text) {
            this.showNotification('Por favor, digite uma tarefa!', 'warning');
            return;
        }

        const task = {
            id: this.nextId++,
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
            priority: this.determinePriority(text)
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.renderTasks();
        this.updateStats();
        this.updateActionButtons();
        
        input.value = '';
        input.focus();
        
        this.showNotification('Tarefa adicionada com sucesso!', 'success');
    }

    determinePriority(text) {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('urgente') || lowerText.includes('importante') || lowerText.includes('!')) {
            return 'high';
        } else if (lowerText.includes('prioridade') || lowerText.includes('#')) {
            return 'medium';
        } else {
            return 'low';
        }
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            this.updateActionButtons();
            
            const status = task.completed ? 'concluída' : 'marcada como pendente';
            this.showNotification(`Tarefa ${status}!`, 'success');
        }
    }

    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        const newText = prompt('Editar tarefa:', task.text);
        if (newText !== null && newText.trim() !== '') {
            task.text = newText.trim();
            task.priority = this.determinePriority(newText);
            task.updatedAt = new Date().toISOString();
            
            this.saveTasks();
            this.renderTasks();
            this.showNotification('Tarefa editada com sucesso!', 'success');
        }
    }

    deleteTask(id) {
        if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            this.updateActionButtons();
            this.showNotification('Tarefa excluída!', 'info');
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Atualizar botões ativos
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        // Salvar filtro no localStorage
        this.saveFilterToStorage();
        
        this.renderTasks();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'pending':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }

    clearCompleted() {
        if (confirm('Tem certeza que deseja limpar todas as tarefas concluídas?')) {
            this.tasks = this.tasks.filter(t => !t.completed);
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            this.updateActionButtons();
            this.showNotification('Tarefas concluídas removidas!', 'success');
        }
    }

    clearAll() {
        if (confirm('ATENÇÃO: Isso irá remover TODAS as tarefas. Tem certeza?')) {
            this.tasks = [];
            this.nextId = 1;
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            this.updateActionButtons();
            this.showNotification('Todas as tarefas foram removidas!', 'info');
        }
    }

    handleTaskAction(e) {
        const taskItem = e.target.closest('.task-item');
        if (!taskItem) return;

        const taskId = parseInt(taskItem.dataset.id);

        if (e.target.closest('.task-checkbox')) {
            this.toggleTask(taskId);
        } else if (e.target.closest('.edit-btn')) {
            this.editTask(taskId);
        } else if (e.target.closest('.delete-btn')) {
            this.deleteTask(taskId);
        }
    }

    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        const emptyState = document.getElementById('emptyState');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            tasksList.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        tasksList.innerHTML = '';

        filteredTasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            tasksList.appendChild(taskElement);
        });
    }

    createTaskElement(task) {
        const template = document.getElementById('taskTemplate');
        const clone = template.content.cloneNode(true);
        
        const taskItem = clone.querySelector('.task-item');
        taskItem.dataset.id = task.id;
        
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        const checkbox = taskItem.querySelector('.task-checkbox');
        checkbox.checked = task.completed;

        const taskText = taskItem.querySelector('.task-text');
        taskText.textContent = task.text;

        const taskDate = taskItem.querySelector('.task-date');
        taskDate.textContent = this.formatDate(task.createdAt);

        const taskPriority = taskItem.querySelector('.task-priority');
        taskPriority.textContent = task.priority;
        taskPriority.classList.add(task.priority);

        return taskItem;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            return 'Hoje';
        } else if (diffDays === 2) {
            return 'Ontem';
        } else if (diffDays <= 7) {
            return `${diffDays - 1} dias atrás`;
        } else {
            return date.toLocaleDateString('pt-BR');
        }
    }

    updateStats() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter(t => t.completed).length;
        const pendingTasks = totalTasks - completedTasks;

        document.getElementById('totalTasks').textContent = totalTasks;
        
        // Atualizar contadores nos filtros
        document.querySelector('[data-filter="all"]').innerHTML = 
            `<i class="fas fa-list"></i> Todas (${totalTasks})`;
        document.querySelector('[data-filter="pending"]').innerHTML = 
            `<i class="fas fa-clock"></i> Pendentes (${pendingTasks})`;
        document.querySelector('[data-filter="completed"]').innerHTML = 
            `<i class="fas fa-check-circle"></i> Concluídas (${completedTasks})`;
    }

    updateActionButtons() {
        const hasCompleted = this.tasks.some(t => t.completed);
        const hasAnyTasks = this.tasks.length > 0;

        document.getElementById('clearCompletedBtn').style.display = hasCompleted ? 'inline-flex' : 'none';
        document.getElementById('clearAllBtn').style.display = hasAnyTasks ? 'inline-flex' : 'none';
    }

    saveTasks() {
        try {
            localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
            console.log('Tarefas salvas no localStorage:', this.tasks.length);
        } catch (error) {
            console.error('Erro ao salvar tarefas no localStorage:', error);
            this.showNotification('Erro ao salvar tarefas!', 'error');
        }
    }

    saveFilterToStorage() {
        try {
            localStorage.setItem('todoFilter', this.currentFilter);
        } catch (error) {
            console.error('Erro ao salvar filtro no localStorage:', error);
        }
    }

    // Métodos para backup e restauração
    exportData() {
        try {
            const data = {
                tasks: this.tasks,
                exportDate: new Date().toISOString(),
                version: '1.0'
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `todo-list-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.showNotification('Backup exportado com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao exportar dados:', error);
            this.showNotification('Erro ao exportar backup!', 'error');
        }
    }

    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.tasks && Array.isArray(data.tasks)) {
                    this.tasks = data.tasks;
                    this.nextId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
                    this.saveTasks();
                    this.renderTasks();
                    this.updateStats();
                    this.updateActionButtons();
                    this.showNotification('Dados importados com sucesso!', 'success');
                } else {
                    throw new Error('Formato de arquivo inválido');
                }
            } catch (error) {
                console.error('Erro ao importar dados:', error);
                this.showNotification('Erro ao importar arquivo!', 'error');
            }
        };
        reader.readAsText(file);
    }

    clearStorage() {
        if (confirm('ATENÇÃO: Isso irá remover TODOS os dados salvos. Tem certeza?')) {
            try {
                localStorage.removeItem('todoTasks');
                localStorage.removeItem('todoFilter');
                this.tasks = [];
                this.nextId = 1;
                this.currentFilter = 'all';
                this.renderTasks();
                this.updateStats();
                this.updateActionButtons();
                this.showNotification('Storage limpo com sucesso!', 'success');
            } catch (error) {
                console.error('Erro ao limpar storage:', error);
                this.showNotification('Erro ao limpar storage!', 'error');
            }
        }
    }

    showNotification(message, type = 'info') {
        // Criar notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        // Adicionar estilos inline para a notificação
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;

        // Adicionar ao DOM
        document.body.appendChild(notification);

        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remover após 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    getNotificationIcon(type) {
        switch (type) {
            case 'success': return 'check-circle';
            case 'warning': return 'exclamation-triangle';
            case 'error': return 'times-circle';
            case 'info': return 'info-circle';
            default: return 'info-circle';
        }
    }

    getNotificationColor(type) {
        switch (type) {
            case 'success': return '#10b981';
            case 'warning': return '#f59e0b';
            case 'error': return '#ef4444';
            case 'info': return '#6366f1';
            default: return '#6366f1';
        }
    }
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new TodoList();
    
    // Adicionar algumas tarefas de exemplo se não houver nenhuma
    const todoList = window.todoList;
    if (todoList && todoList.tasks.length === 0) {
        const sampleTasks = [
            'Estudar JavaScript avançado',
            'Fazer exercícios físicos',
            'Ler um livro por 30 minutos',
            'Organizar o workspace',
            'Planejar a semana'
        ];
        
        sampleTasks.forEach(task => {
            todoList.tasks.push({
                id: todoList.nextId++,
                text: task,
                completed: Math.random() > 0.7,
                createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
                priority: todoList.determinePriority(task)
            });
        });
        
        todoList.saveTasks();
        todoList.renderTasks();
        todoList.updateStats();
        todoList.updateActionButtons();
    }
});

// Adicionar funcionalidade de drag and drop para reordenar tarefas
document.addEventListener('DOMContentLoaded', () => {
    let draggedElement = null;
    
    document.addEventListener('dragstart', (e) => {
        if (e.target.closest('.task-item')) {
            draggedElement = e.target.closest('.task-item');
            e.target.style.opacity = '0.5';
        }
    });
    
    document.addEventListener('dragend', (e) => {
        if (e.target.closest('.task-item')) {
            e.target.style.opacity = '1';
        }
    });
    
    document.addEventListener('dragover', (e) => {
        e.preventDefault();
        const taskItem = e.target.closest('.task-item');
        if (taskItem && draggedElement && taskItem !== draggedElement) {
            const rect = taskItem.getBoundingClientRect();
            const midY = rect.top + rect.height / 2;
            
            if (e.clientY < midY) {
                taskItem.style.borderTop = '2px solid #6366f1';
                taskItem.style.borderBottom = '';
            } else {
                taskItem.style.borderTop = '';
                taskItem.style.borderBottom = '2px solid #6366f1';
            }
        }
    });
    
    document.addEventListener('drop', (e) => {
        e.preventDefault();
        const taskItem = e.target.closest('.task-item');
        if (taskItem && draggedElement && taskItem !== draggedElement) {
            // Remover bordas de destaque
            document.querySelectorAll('.task-item').forEach(item => {
                item.style.borderTop = '';
                item.style.borderBottom = '';
            });
            
            // Aqui você pode implementar a lógica de reordenação
            // Por simplicidade, vamos apenas mostrar uma notificação
            if (window.todoList) {
                window.todoList.showNotification('Funcionalidade de reordenação em desenvolvimento!', 'info');
            }
        }
    });
});

// Adicionar funcionalidade de atalhos de teclado
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter para adicionar tarefa
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (window.todoList) {
            window.todoList.addTask();
        }
    }
    
    // Escape para limpar input
    if (e.key === 'Escape') {
        const input = document.getElementById('taskInput');
        if (input === document.activeElement) {
            input.value = '';
            input.blur();
        }
    }
    
    // Ctrl/Cmd + K para focar no input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('taskInput').focus();
    }
});

// Melhorar acessibilidade
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar labels ARIA
    const taskInput = document.getElementById('taskInput');
    taskInput.setAttribute('aria-label', 'Digite sua nova tarefa');
    
    // Adicionar roles para melhor navegação por leitores de tela
    document.getElementById('tasksList').setAttribute('role', 'list');
    document.querySelectorAll('.task-item').forEach(item => {
        item.setAttribute('role', 'listitem');
    });
    
    // Adicionar suporte para navegação por teclado
    document.querySelectorAll('.filter-btn, .btn').forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
});
