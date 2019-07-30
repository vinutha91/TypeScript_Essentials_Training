enum TodoStates {
    NEW = 1,
    ACTIVE,
    COMPLETED,
    DELETED
}

interface Todo {
    id: number,
    description: string,
    date: Date,
    state: number
}

export class TodoService {
    allTodos: Todo[] = [];
    dom: any;

    constructor(document: any, defaultTodos: Todo[]) {
        this.allTodos = defaultTodos;
        this.dom = document;
        document.getElementById('addTodoButton').addEventListener('click', () => {
            this.addTodo();
        });

        this.renderTodos(this.allTodos);

        document.querySelector('body').addEventListener('click', (event: any) => {
            if (event.target.classList.contains('deleteTodoButton') === true) {
                let todoId: number = parseFloat(event.target.getAttribute('data-todoid'));
                let targetTodo = this.allTodos.filter((todo) => {
                    return todo.id === todoId;
                })
                this.deleteTodo(targetTodo[0]);
            }
        });

        document.querySelector('body').addEventListener('click', (event: any) => {
            if (event.target.classList.contains('completeTodoButton')) {
                let todoId: number = parseFloat(event.target.getAttribute('data-todoid'));
                let targetTodo = this.allTodos.filter((todo) => {
                    return todo.id === todoId;
                })
                this.changeTodoState(targetTodo[0], TodoStates.COMPLETED);
            }
        });
    }

    addTodo(): void {
        var myTodo: Todo;
        var dateElement: any = document.getElementById('date');
        var description: any = document.getElementById('description');

        myTodo = {
            id: Math.random(),
            description: description.value,
            date: new Date(dateElement.value),
            state: TodoStates.NEW
        };

        this.allTodos.push(myTodo);
        this.renderTodos(this.allTodos);
    }

    deleteTodo(todo: Todo): Todo {
        this.allTodos = this.allTodos.filter((currentTodo) => {
            return currentTodo.id !== todo.id;
        });
        this.renderTodos(this.allTodos);
        return todo;
    }

    changeTodoState(todo: Todo, state: TodoStates): boolean {
        document.getElementsByClassName(`todo-${todo.id}`)[0].classList.remove('incomplete');
        document.getElementsByClassName(`todo-${todo.id}`)[0].classList.add('complete');
        this.allTodos.forEach((currentTodo) => {
            if (currentTodo.id === todo.id) {
                currentTodo.state = state;
            }
        });
        return true;
    }

    getAll(): Todo[] {
        return [];
    }

    renderTodos(todos: Todo[]): void {
        document.getElementById('todoList').innerHTML = '';
        todos.forEach(function(todo) {
            let todoClass = 'incomplete';
            if (todo.state === TodoStates.COMPLETED) {
                todoClass = 'complete';
            } else if (todo.state === TodoStates.ACTIVE) {
                todoClass = 'active';
            }

            document.getElementById('todoList').innerHTML += `
                <li class="list-group-item ${todoClass} todo-${todo.id}">
                ${todo.description}
                    <button id='deleteTodoButton' class='btn btn-danger deleteTodoButton' data-todoId='${todo.id}'>Delete</button>
                    <button id='completeTodoButton' class='btn btn-success completeTodoButton' data-todoId='${todo.id}'>Complete</button>
                </li>
            `;
        });
    }
}

// var todoService = new TodoService();