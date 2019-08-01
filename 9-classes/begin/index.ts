import { TodoServices } from './myTodoServices'
// import * as myClass from './myTodoServices';

export interface Todo {
    id: number,
    description: string,
    date: Date,
    state: number
}

class abc {

}

export enum TodoStates {
    NEW,
    ACTIVE,
    COMPLETED,
    DELETED
}

export interface TodoService {
    addTodo(): Todo,
    deleteTodo(id: number): boolean,
    completeTodo(id: number): boolean
}

export class TodoApplication {
    public allTodos: Todo[];
    public todoServices: TodoServices = new TodoServices(this);

    constructor(initialTodos: Todo[]) {
        let todoSubmit = document.getElementById('todoSubmit');
        
        document.querySelector('body').addEventListener('click', (event: any) => {
            var id: number = Number(event.target.getAttribute('data-todoId'));
            if (event.target.classList.contains('deleteButton')) {
                this.todoServices.deleteTodo(id);
            } else if (event.target.classList.contains('completeButton')) {
                this.todoServices.completeTodo(id);
            }
        });

        todoSubmit.addEventListener('click', () => {
            this.todoServices.addTodo();
        });
        
        this.allTodos = initialTodos;
        this.todoServices.rederTodos(this.allTodos);
    }
}



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
