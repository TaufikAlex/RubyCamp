class CarFactory {
    constructor() {
        this.banyakMobil = [Math.floor(Math.random() * 3)];
        
    }
    startbuild(){
        let mobilbulanini = [];
        let startBrio = new Brio(4,4);
        let startPajero = newFunction();
        let startCivic = new Civic(4,5);
        for(let i =0; i<this.banyakMobil; i++){
            mobilbulanini.push(startBrio.buildBrio());
            mobilbulanini.push(startCivic.buildCivic());
            mobilbulanini.push(startPajero.buildPajero());
        }
        console.log(this.mobilbulanini * 3);
        console.log(mobilbulanini);
    }
}

class Car{
    constructor(banyakPintu, banyakKursi){
        this.ban = new Ban();
        this.banyakPintu = banyakPintu;
        this.banyakKursi = banyakKursi;
        this.TahunHardcode = 2023;
    }
    batasGaransi(){
        let Year = new Date();
        return (Year.getFullYear() + (Math.floor(Math.random() * 4)+ 3));
    }
}

class Ban{
    constructor(){
        let arrBan = ["GoodYear", "Michellin", "Dunlop","BridgeStone","Pirelli"];
        this.merekBan = arrBan[Math.floor(Math.random() * 4)];
    }
    getMerek(){
        console.log("Ban bermerek: " + this.merekBan);
    }
    getAvgDuration(){
        let x = Math.floor(Math.random() * 4) +1;
        console.log("Ban ini tahan hingga "+x+"tahun");
    }
}
class Civic extends Car{
    buildCivic(){
        let objBuild = {
            MerekMobil : "Civic",
            banyakPintu: `${this.banyakPintu}`,
            banyakKursi: `${this.banyakKursi}`,
            Ban:`${this.ban.merekBan}`,
            statusGaransi:`${(this.batasGaransi() - this.TahunHardcode >=0) ? "Aktif" : "Habis"}`
        }
        return objBuild;
    }
}

class Brio extends Car{
    buildBrio(){
        let objBuild = {
            MerekMobil : "Brio",
            banyakPintu: `${this.banyakPintu}`,
            banyakKursi: `${this.banyakKursi}`,
            Ban:`${this.ban.merekBan}`,
            statusGaransi:`${(this.batasGaransi() - this.TahunHardcode >=0) ? "Aktif" : "Habis"}`
        }
        return objBuild;
    }
}

class Pajero extends Car{
    buildPajero(){
        let objBuild = {
            MerekMobil : "Pajero",
            banyakPintu: `${this.banyakPintu}`,
            banyakKursi: `${this.banyakKursi}`,
            Ban:`${this.ban.merekBan}`,
            statusGaransi:`${(this.batasGaransi() - this.TahunHardcode >=0) ? "Aktif" : "Habis"}`
        }
        return objBuild;
    }
}

let pabrik = new CarFactory();
pabrik.startbuild();






function newFunction() {
    return new Pajero(4, 8);
}
// class Cars {
//     constructor(name) {

//         this.name = 'Honda';
//     }
// }
// class Jazz extends Cars {
//     constructor(ban, kursi, pintu, type) {
//         super();
//         this.ban = ban;
//         this.kursi = kursi;
//         this.pintu = pintu;
//         this.type = type
//     }
// }
// const CarsJazz = new Jazz('4 Ban', '5 kursi', '4 pintu', 'Type S');
// console.log(CarsJazz);

// class Civic extends Cars {
//     constructor(ban, kursi, pintu, type) {
//         super();
//         this.ban = ban;
//         this.kursi = kursi;
//         this.pintu = pintu;
//         this.type = type
//     }
// }
// const Carsvic = new Civic('4 Ban', '2 kursi', '2 pintu', 'Type Exs');
// console.log(Carsvic);

// class tyre {
//     constructor(){
        
//     }
// }
// ;
// class Warranty {
//     constructor(Name_cars, garansi){
        
//         this.Name_cars=Name_cars;
//         this.garansi=Math.floor(Math.random()* garansi) ;
        
//     }
// }
// const CJazz = new Warranty ('Jazz',5);
// const CCivic = new Warranty ('Civic',5);
// console.log(CJazz);
// console.log(CCivic);
// // console.log(car.Toyota()); // It is a car: Tesla
// // console.log(car.Honda()); // carclass Cars {
//     constructor(name) {

//         this.name = 'Honda';
//     }
// }
// class Jazz extends Cars {
//     constructor(ban, kursi, pintu, type) {
//         super();
//         this.ban = ban;
//         this.kursi = kursi;
//         this.pintu = pintu;
//         this.type = type
//     }
// }
// const CarsJazz = new Jazz('4 Ban', '5 kursi', '4 pintu', 'Type S');
// console.log(CarsJazz);

// class Civic extends Cars {
//     constructor(ban, kursi, pintu, type) {
//         super();
//         this.ban = ban;
//         this.kursi = kursi;
//         this.pintu = pintu;
//         this.type = type
//     }
// }
// const Carsvic = new Civic('4 Ban', '2 kursi', '2 pintu', 'Type Exs');
// console.log(Carsvic);

// class tyre {
//     constructor(){
        
//     }
// }
// ;
// class Warranty {
//     constructor(Name_cars, garansi){
        
//         this.Name_cars=Name_cars;
//         this.garansi=Math.floor(Math.random()* garansi) ;
        
//     }
// }
// const CJazz = new Warranty ('Jazz',5);
// const CCivic = new Warranty ('Civic',5);
// console.log(CJazz);
// console.log(CCivic);
// // console.log(car.Toyota()); // It is a car: Tesla
// // console.log(car.Honda()); // car



