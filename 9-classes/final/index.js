System.register([], function (exports_1, context_1) {
    "use strict";
    var TodoStates, TodoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (TodoStates) {
                TodoStates[TodoStates["NEW"] = 1] = "NEW";
                TodoStates[TodoStates["ACTIVE"] = 2] = "ACTIVE";
                TodoStates[TodoStates["COMPLETED"] = 3] = "COMPLETED";
                TodoStates[TodoStates["DELETED"] = 4] = "DELETED";
            })(TodoStates || (TodoStates = {}));
            TodoService = class TodoService {
                constructor(document, defaultTodos) {
                    this.allTodos = [];
                    this.allTodos = defaultTodos;
                    this.dom = document;
                    document.getElementById('addTodoButton').addEventListener('click', () => {
                        this.addTodo();
                    });
                    this.renderTodos(this.allTodos);
                    document.querySelector('body').addEventListener('click', (event) => {
                        if (event.target.classList.contains('deleteTodoButton') === true) {
                            let todoId = parseFloat(event.target.getAttribute('data-todoid'));
                            let targetTodo = this.allTodos.filter((todo) => {
                                return todo.id === todoId;
                            });
                            this.deleteTodo(targetTodo[0]);
                        }
                    });
                    document.querySelector('body').addEventListener('click', (event) => {
                        if (event.target.classList.contains('completeTodoButton')) {
                            let todoId = parseFloat(event.target.getAttribute('data-todoid'));
                            let targetTodo = this.allTodos.filter((todo) => {
                                return todo.id === todoId;
                            });
                            this.changeTodoState(targetTodo[0], TodoStates.COMPLETED);
                        }
                    });
                }
                addTodo() {
                    var myTodo;
                    var dateElement = document.getElementById('date');
                    var description = document.getElementById('description');
                    myTodo = {
                        id: Math.random(),
                        description: description.value,
                        date: new Date(dateElement.value),
                        state: TodoStates.NEW
                    };
                    this.allTodos.push(myTodo);
                    this.renderTodos(this.allTodos);
                }
                deleteTodo(todo) {
                    this.allTodos = this.allTodos.filter((currentTodo) => {
                        return currentTodo.id !== todo.id;
                    });
                    this.renderTodos(this.allTodos);
                    return todo;
                }
                changeTodoState(todo, state) {
                    document.getElementsByClassName(`todo-${todo.id}`)[0].classList.remove('incomplete');
                    document.getElementsByClassName(`todo-${todo.id}`)[0].classList.add('complete');
                    this.allTodos.forEach((currentTodo) => {
                        if (currentTodo.id === todo.id) {
                            currentTodo.state = state;
                        }
                    });
                    return true;
                }
                getAll() {
                    return [];
                }
                renderTodos(todos) {
                    document.getElementById('todoList').innerHTML = '';
                    todos.forEach(function (todo) {
                        let todoClass = 'incomplete';
                        if (todo.state === TodoStates.COMPLETED) {
                            todoClass = 'complete';
                        }
                        else if (todo.state === TodoStates.ACTIVE) {
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
            };
            exports_1("TodoService", TodoService);
            // var todoService = new TodoService();
        }
    };
});
//# sourceMappingURL=index.js.map