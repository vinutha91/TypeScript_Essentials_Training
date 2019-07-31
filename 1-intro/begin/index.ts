// var a: any;
// a = 'Ankit'
// a = 25;
// a = true;
// a = [];

// var b: number;
// var c: boolean;
// var myArray: [];

// var allNames: string[];
// var vehicleDetails: { name: string, number: string, kmsTravelled: number };

// vehicleDetails.name = '29';
// vehicleDetails.number = 'MH12PD1102';
// vehicleDetails.kmsTravelled = 1200;



// var myAge = 29;

// if(myAge > 18) {
//     let isAllowedToVote = true;
// }

// // console.log(isAllowedToVote);

// // myNewName;


// //vehicleDetails.petName = 'meri puk puk!';



// // function whatIsMyName() { 
// //     var myName = 'Ankit';
// //     return myName;
// // }


// function addTwoNumbers(a: (number | string), b: number) {
//     var x: number = Number(a);
//     var y = b;
//     return x+y;
// }

// addTwoNumbers(5, 4);


// // Union Types
// // function getLength(x: (string | any[]), y: string | any[]) {
// //     // y.push();
// //     // x.toUpperCase();
// //     // x.length + y.length;
// //     // x.indexOf('a'); 
// //     // y.indexOf('B');

// //     // x.concat('Abc')
// //     // y.concat('D');

// //     // Type guarging
// //     if (y instanceof Array) {
// //         y.push('D');
// //         y.pop();
// //         y.filter(function(){});
// //         y.map(function(){});
// //     }

// //     if (x instanceof String) {
// //         x.toUpperCase();
// //     }

// // }

// //getLength('ankit', ['A', 'B', 'C']);

// // function getVehicleDetails() {
// //     return ['Ankit', 29, true];
// // }








// // function overloading
// function getLength(x:number, y: number)
// function getLength(x:string, y: string) 
// function getLength(x:any, y: any) {
//     if ((x instanceof Number) && (y instanceof Number)) {
//         // EXECUTE 1ST BLOCK
//         return Number(x)+Number(y);
//     }

//     if ((x instanceof String) && (y instanceof String)) {
//         // EXECUTE 2ND BLOCK
//         return x.length + y.length;
//     }
// }

// getLength(1,2);


// // type: string, name: string, vehicleNumber: string, kmsTravelled: number

// interface Vehicle {
//     type?: string, // optional
//     name: string,
//     kmsTravelled: number,
//     vehicleNumber: string,
//     isRegistered(): boolean
// }

// // color available 
// interface Vehicle {
//     color: string
// }

// // Type casting
// var myVehicle:Vehicle ={
//     name: 'Jupiter',
//     kmsTravelled: 1233,
//     vehicleNumber: 'MH12PD1200',
//     isRegistered: function() {
//         return Math.random() > 0.5;
//     },
//     color: 'red'
// }


// interface Mammal {
//     isParent: boolean,
//     hasChildrenCategories: boolean,
//     legs: number
// }

// interface MammalNew {
//     someProperty: string
// }

// // inheritance - extends
// interface Animal extends Mammal, MammalNew {
//     breed: string,
//     name: string,
//     age: number
// }

// var myPet: Animal = {
//     someProperty: 'abc',
//     isParent: false,
//     hasChildrenCategories: true,
//     legs: 4,
//     breed: 'Cat',
//     name: 'Fluffykins!!!',
//     age: 2
// }


// var input = 'input';
// var review = 'review';
// var conf = 'confirm';
// var pageUrl = 'review';

// enum TodoStates {
//     NEW = 1, // 1
//     ACTIVE, // 2
//     COMPLETED, // 3
//     DELETED // 4
// }












// // function getAllVehicles(): Vehicle[] {


// //     return [{age: 29}];
// // }







