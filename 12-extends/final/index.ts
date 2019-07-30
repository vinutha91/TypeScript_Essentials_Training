class Vehicle {
    public type: string;
    public numberOfWheels: number;

    constructor(type: string, numberOfWheels: number) {
        this.type = type;
        this.numberOfWheels = numberOfWheels;
    }

    public isRegistered(): boolean {
        return true;
    }
}

class Car extends Vehicle {
    public brand: string;
    public model: string;

    constructor (brand: string, model: string, type: string, numberOfWheels: number) {
        super(type, numberOfWheels);
        this.brand = brand;
        this.model = model;
    }

    public isRegistered(): boolean {
        console.log('This is a parent function overriden in child!!!')
        return false;
    }

    public startCar(): boolean {
        console.log('GRRRRRRHHHHH!!!')
        return true;
    }
}

var myCar = new Car('Hyundar', 'Creta', 'Car', 4);
myCar.isRegistered();
myCar.startCar();