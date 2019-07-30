abstract class VehicleAbstract {
    public type: string;
    public numberOfWheels: number;

    constructor(type: string, numberOfWheels: number) {
        this.type = type;
        this.numberOfWheels = numberOfWheels;
    }

    abstract isRegistered(): boolean;
}


class CarNew extends VehicleAbstract {
    public brand: string;
    public model: string;

    public isRegistered():boolean {
        return false;
    }

    constructor (brand: string, model: string, type: string, numberOfWheels: number) {
        super(type, numberOfWheels);
        this.brand = brand;
        this.model = model;
    }

    public startCar(): boolean {
        console.log('GRRRRRRHHHHH!!!')
        return true;
    }
}



// var myVehicle = new VehicleAbstract('')
var myCar = new CarNew('Hyundar', 'Creta', 'Car', 4);
myCar.isRegistered();
myCar.startCar();