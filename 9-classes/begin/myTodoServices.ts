import { Todo, TodoService, TodoApplication, TodoStates } from './index';

// export class abc {

// }

export class TodoServices implements TodoService {
    todoApplication: TodoApplication;
    constructor(todoApp: TodoApplication) {
        this.todoApplication = todoApp;
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
        
        this.todoApplication.allTodos.push(myTodo);
        
        this.rederTodos(this.todoApplication.allTodos);
        
        return myTodo;
    }

    deleteTodo(id: number): boolean {
        let targetTodo = this.todoApplication.allTodos.filter((todo) => {
            return todo.id === id;
        });

        if (targetTodo[0].state === TodoStates.NEW) {
            alert('A todo in New state cannot be deleted!');
            return;
        }

        this.todoApplication.allTodos = this.todoApplication.allTodos.filter((todo) => {
            return todo.id !== id;
        });

        this.rederTodos(this.todoApplication.allTodos);

        return true;
    }

    completeTodo(id: number): boolean {
        this.todoApplication.allTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.state = TodoStates.COMPLETED;
            }
        });

        this.rederTodos(this.todoApplication.allTodos);

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