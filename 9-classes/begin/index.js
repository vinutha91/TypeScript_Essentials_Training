System.register([], function (exports_1, context_1) {
    "use strict";
    var TodoStates, TodoApplication;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (TodoStates) {
                TodoStates[TodoStates["NEW"] = 0] = "NEW";
                TodoStates[TodoStates["ACTIVE"] = 1] = "ACTIVE";
                TodoStates[TodoStates["COMPLETED"] = 2] = "COMPLETED";
                TodoStates[TodoStates["DELETED"] = 3] = "DELETED";
            })(TodoStates || (TodoStates = {}));
            TodoApplication = class TodoApplication {
                constructor(initialTodos) {
                    let todoSubmit = document.getElementById('todoSubmit');
                    document.querySelector('body').addEventListener('click', (event) => {
                        var id = Number(event.target.getAttribute('data-todoId'));
                        if (event.target.classList.contains('deleteButton')) {
                            this.deleteTodo(id);
                        }
                        else if (event.target.classList.contains('completeButton')) {
                            this.completeTodo(id);
                        }
                    });
                    todoSubmit.addEventListener('click', () => {
                        this.addTodo();
                    });
                    this.allTodos = initialTodos;
                    this.rederTodos(this.allTodos);
                }
                addTodo() {
                    let myTodo;
                    let todoDescInput = document.getElementById('description');
                    let todoDateInput = document.getElementById('date');
                    myTodo = {
                        id: Math.random(),
                        state: 0,
                        description: todoDescInput.value,
                        date: new Date(todoDateInput.value)
                    };
                    this.allTodos.push(myTodo);
                    this.rederTodos(this.allTodos);
                    return myTodo;
                }
                deleteTodo(id) {
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
                completeTodo(id) {
                    this.allTodos.forEach((todo) => {
                        if (todo.id === id) {
                            todo.state = TodoStates.COMPLETED;
                        }
                    });
                    this.rederTodos(this.allTodos);
                    return true;
                }
                rederTodos(todos) {
                    var myTodoList = document.getElementById('myTodoList');
                    myTodoList.innerHTML = '';
                    todos.forEach((todo) => {
                        let todoClass = 'incomplete';
                        if (todo.state === TodoStates.COMPLETED) {
                            todoClass = 'complete';
                        }
                        else if (todo.state === TodoStates.ACTIVE) {
                            todoClass = 'active';
                        }
                        myTodoList.innerHTML += `
                <li class="list-group-item ${todoClass}">
                    ${todo.description}
                    <button class="btn btn-danger deleteButton" data-todoId="${todo.id}">Delete</button>
                    <button class="btn btn-success completeButton" data-todoId="${todo.id}">Complete</button>
                </li>
            `;
                    });
                }
            };
            exports_1("TodoApplication", TodoApplication);
        }
    };
});
//# sourceMappingURL=index.js.map