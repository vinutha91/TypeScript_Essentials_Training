System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var index_1, TodoServices;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            // export class abc {
            // }
            TodoServices = class TodoServices {
                constructor(todoApp) {
                    this.todoApplication = todoApp;
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
                    this.todoApplication.allTodos.push(myTodo);
                    this.rederTodos(this.todoApplication.allTodos);
                    return myTodo;
                }
                deleteTodo(id) {
                    let targetTodo = this.todoApplication.allTodos.filter((todo) => {
                        return todo.id === id;
                    });
                    if (targetTodo[0].state === index_1.TodoStates.NEW) {
                        alert('A todo in New state cannot be deleted!');
                        return;
                    }
                    this.todoApplication.allTodos = this.todoApplication.allTodos.filter((todo) => {
                        return todo.id !== id;
                    });
                    this.rederTodos(this.todoApplication.allTodos);
                    return true;
                }
                completeTodo(id) {
                    this.todoApplication.allTodos.forEach((todo) => {
                        if (todo.id === id) {
                            todo.state = index_1.TodoStates.COMPLETED;
                        }
                    });
                    this.rederTodos(this.todoApplication.allTodos);
                    return true;
                }
                rederTodos(todos) {
                    var myTodoList = document.getElementById('myTodoList');
                    myTodoList.innerHTML = '';
                    todos.forEach((todo) => {
                        let todoClass = 'incomplete';
                        if (todo.state === index_1.TodoStates.COMPLETED) {
                            todoClass = 'complete';
                        }
                        else if (todo.state === index_1.TodoStates.ACTIVE) {
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
            exports_1("TodoServices", TodoServices);
        }
    };
});
//# sourceMappingURL=myTodoServices.js.map