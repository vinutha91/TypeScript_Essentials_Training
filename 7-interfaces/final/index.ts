interface Trip {
    number: string,
    kms: number,
    totalFuelPrice: number,
    pricePerLtr: number,
    date: Date,
    addTrip?(number: string, kms: number, totalFuelPrice: number, pricePerLtr: number, date: Date): Promise<Trip>
}

interface Vehicle {
    type?: string,
    name: string,
    kms: number,
    number: string
}

interface Vehicle {
    isVehicleRegistered: boolean
}

var myTrip: Trip = {
    number: 'MH12PD1102',
    kms: 1202,
    totalFuelPrice: 575,
    pricePerLtr: 72,
    date: new Date()
};

// TypeCasting
var myNewTrip = <Trip>{

};

var myVehicle: Vehicle = {
    name: 'Scooty',
    kms: 1201,
    number: 'MH12PD1202',
    isVehicleRegistered: true
}

interface MileageCalculatorServices {
    registerVehicle(type: string, name: string, kms: number, number: string): Promise<Vehicle>,
    addTrip(number: string, kms: number, totalFuelPrice: number, pricePerLtr: number, date: Date): Promise<Trip>
    deleteTrip(): Promise<Trip>
}


interface Mamal {
    isParent: boolean,
    hasChildCategories: boolean
}

interface Animal extends Mamal {
    type: string,
    noOfLegs: number
}

var myPet: Animal = {
    isParent: true,
    hasChildCategories: false,
    type: 'dog',
    noOfLegs: 4
}