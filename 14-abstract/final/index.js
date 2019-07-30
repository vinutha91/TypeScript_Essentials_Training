class VehicleAbstract {
    constructor(type, numberOfWheels) {
        this.type = type;
        this.numberOfWheels = numberOfWheels;
    }
    isRegistered() {
        return true;
    }
}
class CarNew extends VehicleAbstract {
    constructor(brand, model, type, numberOfWheels) {
        super(type, numberOfWheels);
        this.brand = brand;
        this.model = model;
    }
    startCar() {
        console.log('GRRRRRRHHHHH!!!');
        return true;
    }
}
var myCar = new CarNew('Hyundar', 'Creta', 'Car', 4);
myCar.isRegistered();
myCar.startCar();
//# sourceMappingURL=index.js.map