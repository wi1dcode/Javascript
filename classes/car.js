class car {
    constructor(brand, speed) {
        this.brand = brand  
        this.speed = speed
    }

    accelerate = number => {
        this.speed = this.speed + number 
    }

    brake = number => {
        this.speed = this.speed - number
    }

    describe = () => {
        console.log(`${this.brand} running at ${this.speed} km/h`);
    }
}

var ford = new car ("Ford", 0)
console.log(ford);

ford.accelerate(50)
console.log(ford);

ford.brake(25)

ford.describe();


var bmw = new car ("BMW", 0)
bmw.accelerate(200)
console.log(bmw);

bmw.brake(120)

bmw.describe();


