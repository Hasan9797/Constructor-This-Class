function Car(name,color, airBag) {
    this.name = name;
    this.color = color;
    this.airBag = airBag;
    this.isBuy = false;

    this.speed = function (){
        console.log(`${this.name} has 100km/h`)
    }
}

Car.prototype.town = function (){
    console.log('New York');
}
const mers = new Car('Mers','blue', false);
const BMW = new Car('BMW','black', true);

mers.town()
BMW.speed()