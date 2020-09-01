/*
class Car{
    constructor(brand, factory){
        this.brand = brand
        this.factory = factory
        this.sound = "tititititit"
    }
}
 firstExample
var Car = class{
    constructor(brand, factory){
        this.brand = brand
        this.factory = factory
    }
}
console.log(Car.name)

var Car = class Car2{
    constructor(brand, factory){
        this.brand = brand
        this.factory = factory
    }
}
console.log(Car.name)

class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(x){
        return x+" ,Hey there i have a "+this.carname
    }
}

mycar = new Car("ford");
console.log(mycar.present("Hello"))

class Car{
    constructor(brand){
        this.carName = brand;
    }
     static hello(){
        return "Hello!!";
    }
}

myCar = new Car("Ford");
console.log(Car.hello());
//console.log(myCar.hello()) 

class Car{
    constructor(brand){
        this.carName = brand;
    }
    present(){
        return 'I Have a '+this.carName;
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ' , it is a '+this.model;
    }
}

mycar = new Model("Toyota", "Avanza");
console.log(mycar.show()); */

class Car{
    constructor(brand){
        this._carname = brand;
    }
    get carnam() {
        return this._carname;
    }
    set carnam(x){
        this._carname = x;
    }
}

mycar = new Car("Ford");
mycar.carname = "Volvo"; 