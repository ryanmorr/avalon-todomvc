import avalon from '@ryanmorr/avalon';

const NAMESPACE = 'avalon-todos';
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

function uuid() {
    return Math.random().toString(36).substr(2, 9);
}

function getTodo(todos, id) {
    return todos.find((todo) => todo.id === id);
}

const store = localStorage[NAMESPACE];
const initialState = store && JSON.parse(store) || {
    todos: [],
    newTodo: null,
    editing: null,
    editText: null
};

const app = avalon(initialState);

app.mutate({
    newTodo: (state, value) => ({
        newTodo: value
    }),
    addTodo: (state, title) => ({
        newTodo: '',
        todos: state.todos.concat({
            id: uuid(),
            title,
            completed: false
        })
    }),
    toggleTodo: (state, id) => ({
        todos: state.todos.map((todo) => (
            todo.id !== id ? todo : ({...todo, completed: !todo.completed})
        ))
    }),
    toggleAllTodos: (state, completed) => ({
        todos: state.todos.map((todo) => ({...todo, completed}))
    }),
    editTodo: (state, todoToEdit) => ({
        editing: todoToEdit.id,
        editText: todoToEdit.title
    }),
    editTodoText: (state, value) => ({
        editText: value
    }),
    saveTodo: (state, {todo: todoToSave, title}) => ({
        editing: null,
        editText: null,
        todos: state.todos.map((todo) => (
            todo !== todoToSave ? todo : ({...todo, title})
        ))
    }),
    destroyTodo: (state, todoToDestroy) => ({
        todos: state.todos.filter((todo) => todo !== todoToDestroy)
    }),
    cancelEdit: () => ({
        editing: null
    }),
    clearCompletedTodos: (state) => ({
        todos: state.todos.filter((todo) => !todo.completed)
    })

});

app.action({
    onNewTodoKeyDown: ({state, event, commit}) => {
        if (event.keyCode !== ENTER_KEY) {
            return;
        }
        event.preventDefault();
        const value = state.newTodo.trim();
        if (value) {
            commit('addTodo', value);
        }
    },
    onNewTodoInput: ({event, commit}) => {
        commit('newTodo', event.target.value);
    },
    toggle: ({params, commit}) => {
        commit('toggleTodo', params.id);
    },
    toggleAll: ({event, commit}) => {
        commit('toggleAllTodos', event.target.checked);
    },
    destroy: ({state, params, commit}) => {
        commit('destroyTodo', getTodo(state.todos, params.id));
    },
    edit: ({state, params, commit}) => {
        commit('editTodo', getTodo(state.todos, params.id));
    },
    onEditTodoSubmit: ({state, params, commit, dispatch}) => {
        const todo = getTodo(state.todos, params.id);
        const title = state.editText.trim();
        if (title) {
            commit('saveTodo', {todo, title});
        } else {
            dispatch('destroy', {id: todo.id});
        }
    },
    onEditTodoInput: ({state, params, event, commit}) => {
        commit('editTodoText', event.target.value);
    },
    onEditTodoKeyDown: ({state, params, event,  commit, dispatch}) => {
        if (event.which === ESCAPE_KEY) {
            commit('editTodoText', event.target.value);
            commit('cancelEdit');
        } else if (event.which === ENTER_KEY) {
            dispatch('onEditTodoSubmit', {id: params.id});
        }
    },
    clearCompleted: ({commit}) => {
        commit('clearCompletedTodos');
    }
});

app.on('mutate', (name, state) => {
    localStorage[NAMESPACE] = JSON.stringify(state);
});

app.on('render', () => {
    const el = document.querySelector('.edit');
    if (el) {
        el.focus();
    }
});

app.view('.todoapp', (html, {todos, newTodo, editing, editText}, dispatch) => {
    const activeTodoCount = todos.reduce((a, todo) => a + (todo.completed ? 0 : 1), 0);
    const completedCount = todos.length - activeTodoCount;

    return html`
        <div>
            <header class="header">
                <h1>todos</h1>
                <input
                    class="new-todo"
                    placeholder="What needs to be done?"
                    value=${newTodo}
                    onkeydown=${dispatch('onNewTodoKeyDown')}
                    oninput=${dispatch('onNewTodoInput')}
                    autofocus=${true}
                />
            </header>
        </div>

        ${todos.length > 0 && html`
            <section class="main">
                <input
                    id="toggle-all"
                    class="toggle-all"
                    type="checkbox"
                    onChange=${dispatch('toggleAll')}
                    checked=${activeTodoCount === 0}
                />
                <label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                    ${todos.map(({id, title, completed}) => html`
                        <li class=${{completed, editing: editing === id}} key=${id}>
                            <div class="view">
                                <input class="toggle" type="checkbox" checked=${completed} onchange=${dispatch('toggle', {id})} />
                                <label ondblclick=${dispatch('edit', {id})}>${title}</label>
                                <button class="destroy" onclick=${dispatch('destroy', {id})} />
                            </div>
                            ${editing === id && html`
                                <input
                                    class="edit"
                                    value=${editText}
                                    onblur=${dispatch('onEditTodoSubmit', {id})}
                                    oninput=${dispatch('onEditTodoInput', {id})}
                                    onkeydown=${dispatch('onEditTodoKeyDown', {id})}
                                />
                            `}
                        </li>
                    `)}
                </ul>
            </section>
        `}
        
        ${(activeTodoCount > 0 || completedCount > 0) && html`
            <footer class="footer">
                <span class="todo-count">
                    <strong>${activeTodoCount}</strong> ${activeTodoCount === 1 ? 'item' : 'items'} left
                </span>
                ${completedCount > 0 && html`<button class="clear-completed" onclick=${dispatch('clearCompleted')}>Clear completed</button>`}
            </footer>
        `}
    `;
});