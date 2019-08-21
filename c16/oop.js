class CarFactory {

    constructor(name, type, total) {
        this.name = name;
        this.type = type;
        this.total = Math.floor(Math.random() * total);
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

// console.log(car.Toyota()); // It is a car: Tesla
// console.log(car.Honda()); // car

