interface Todo {
    id: number,
    description: string,
    date: Date,
    state: number
}

enum TodoStates {
    NEW,
    ACTIVE,
    COMPLETED,
    DELETED
}

interface TodoService {
    addTodo(): Todo,
    deleteTodo(id: number): boolean,
    completeTodo(id: number): boolean
}

export class TodoApplication implements TodoService {
    allTodos: Todo[];

    constructor(initialTodos: Todo[]) {
        let todoSubmit = document.getElementById('todoSubmit');
        
        document.querySelector('body').addEventListener('click', (event: any) => {
            var id: number = Number(event.target.getAttribute('data-todoId'));
            if (event.target.classList.contains('deleteButton')) {
                this.deleteTodo(id);
            } else if (event.target.classList.contains('completeButton')) {
                this.completeTodo(id);
            }
        });

        todoSubmit.addEventListener('click', () => {
            this.addTodo();
        });
        
        this.allTodos = initialTodos;
        this.rederTodos(this.allTodos);
    }

    addTodo(): Todo {
        let myTodo: Todo;
        
        let todoDescInput:any = document.getElementById('description');
        let todoDateInput:any = document.getElementById('date');
        
        myTodo = {
            id: Math.random(),
            state: 0,
            description: todoDescInput.value,
            date: new Date(todoDateInput.value)
        }
        
        this.allTodos.push(myTodo);
        
        this.rederTodos(this.allTodos);
        
        return myTodo;
    }

    deleteTodo(id: number): boolean {
        let targetTodo = this.allTodos.filter((todo) => {
            return todo.id === id;
        });

        if (targetTodo[0].state === TodoStates.NEW) {
            alert('A todo in New state cannot be deleted!');
            return;
        }

        this.allTodos = this.allTodos.filter((todo) => {
            return todo.id !== id;
        });

        this.rederTodos(this.allTodos);

        return true;
    }

    completeTodo(id: number): boolean {
        this.allTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.state = TodoStates.COMPLETED;
            }
        });

        this.rederTodos(this.allTodos);

        return true;
    }

    rederTodos(todos: Todo[]) {
        var myTodoList = document.getElementById('myTodoList');

        myTodoList.innerHTML = '';
        todos.forEach((todo) => {
            let todoClass = 'incomplete';
            if (todo.state === TodoStates.COMPLETED) {
                todoClass = 'complete';
            } else if (todo.state === TodoStates.ACTIVE) {
                todoClass = 'active';
            }
            myTodoList.innerHTML += `
                <li class="list-group-item ${todoClass}">
                    ${todo.description}
                    <button class="btn btn-danger deleteButton" data-todoId="${todo.id}">Delete</button>
                    <button class="btn btn-success completeButton" data-todoId="${todo.id}">Complete</button>
                </li>
            `
        })
    }
}
