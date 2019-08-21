class CarFactory {

    constructor(name, type, total) {
        this.name = name;
        this.type = type;
        
    }
}

class Cars {
    constructor(name) {

        this.name = 'Honda';
    }
}
class Jazz extends Cars {
    constructor(ban, kursi, pintu, type) {
        super();
        this.ban = ban;
        this.kursi = kursi;
        this.pintu = pintu;
        this.type = type
    }
}
const CarsJazz = new Jazz('4 Ban', '5 kursi', '4 pintu', 'Type S');
console.log(CarsJazz);

class Civic extends Cars {
    constructor(ban, kursi, pintu, type) {
        super();
        this.ban = ban;
        this.kursi = kursi;
        this.pintu = pintu;
        this.type = type
    }
}
const Carsvic = new Civic('4 Ban', '2 kursi', '2 pintu', 'Type Exs');
console.log(Carsvic);

class tyre {
    constructor(){
        
    }
}

class Warranty {
    constructor(Name_cars, garansi){
        this.Name_cars=Name_cars;
        this.garansi=Math.floor(Math.random()* garansi);
        
    }
}
const CJazz = new Warranty ('Jazz',5);
const CCivic = new Warranty ('Civic',5);
console.log(CJazz);
console.log(CCivic);
// console.log(car.Toyota()); // It is a car: Tesla
// console.log(car.Honda()); // car

