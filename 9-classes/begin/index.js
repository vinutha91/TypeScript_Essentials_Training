System.register(["./myTodoServices"], function (exports_1, context_1) {
    "use strict";
    var myTodoServices_1, abc, TodoStates, TodoApplication;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (myTodoServices_1_1) {
                myTodoServices_1 = myTodoServices_1_1;
            }
        ],
        execute: function () {
            abc = class abc {
            };
            (function (TodoStates) {
                TodoStates[TodoStates["NEW"] = 0] = "NEW";
                TodoStates[TodoStates["ACTIVE"] = 1] = "ACTIVE";
                TodoStates[TodoStates["COMPLETED"] = 2] = "COMPLETED";
                TodoStates[TodoStates["DELETED"] = 3] = "DELETED";
            })(TodoStates || (TodoStates = {}));
            exports_1("TodoStates", TodoStates);
            TodoApplication = class TodoApplication {
                constructor(initialTodos) {
                    this.todoServices = new myTodoServices_1.TodoServices(this);
                    let todoSubmit = document.getElementById('todoSubmit');
                    document.querySelector('body').addEventListener('click', (event) => {
                        var id = Number(event.target.getAttribute('data-todoId'));
                        if (event.target.classList.contains('deleteButton')) {
                            this.todoServices.deleteTodo(id);
                        }
                        else if (event.target.classList.contains('completeButton')) {
                            this.todoServices.completeTodo(id);
                        }
                    });
                    todoSubmit.addEventListener('click', () => {
                        this.todoServices.addTodo();
                    });
                    this.allTodos = initialTodos;
                    this.todoServices.rederTodos(this.allTodos);
                }
            };
            exports_1("TodoApplication", TodoApplication);
            // abstract class Vehicle {
            //     abstract type: string;
            //     wheels: number;
            //     constructor(wheels: number) {
            //         this.wheels = wheels;
            //     }
            //     abstract soundOfMyVehicle(): string;
            // }
            // // Cannot instantiate Abstract classes
            // // let myVehicle: Vehicle = new Vehicle('Car', 4);
            // class Car extends Vehicle {
            //     color: string;
            //     brand: string;
            //     type: string;
            //     constructor(color: string, brand: string, type: string, wheels: number) {
            //         super(wheels);
            //         this.type = type;
            //         this.color = color;
            //         this.brand = brand;
            //     }
            //     soundOfMyVehicle(): string {
            //         return 'GRGRGRGFGRGRGRGRGRGG';
            //     }
            // }
            // class Vehicle {
            //     type: string;
            //     wheels: number;
            //     constructor(wheels: number) {
            //         this.wheels = wheels;
            //     }
            //     soundOfMyVehicle(): string {
            //         return 'AAAAAAAAAAAAAAA';
            //     };
            // }
            // class Car extends Vehicle {
            //     static color: string;
            //     brand: string;
            //     type: string;
            //     constructor(color: string, brand: string, type: string, wheels: number) {
            //         super(wheels);
            //         this.type = type;
            //         this.brand = brand;
            //         Car.color = 'red';
            //     }
            //     soundOfMyVehicle(): string {
            //         return 'GRGRGRGFGRGRGRGRGRGG';
            //         Car.color = 'green';
            //     }
            // }
            // // function add(a: number, b: number): number
            // // function add(a: string, b: string): string
            // // function add(a: any, b: any): any
            // // {
            // //     return a+b;
            // // }
            // function clone<T>(a: T):T {
            //     let myObject = JSON.stringify(a)
            //     return JSON.parse(myObject);
            // }
            // class KeyValuePair<TKey, TValue> {
            //     key: TKey;
            //     value: TValue;
            //     constructor(key: TKey, value: TValue) {
            //         this.key = key;
            //         this.value = value;
            //     }
            // }
            // var obj1 = new KeyValuePair(1,'a');
            // var obj2 = new KeyValuePair('a','a');
            // var obj3 = new KeyValuePair('a',2);
            // var obj4 = new KeyValuePair('a',[]);
        }
    };
});
//# sourceMappingURL=index.js.map