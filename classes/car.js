class car {
    constructor(brand, speed) {
        this.brand = brand  
        this.speed = speed
    }

    accelerate = (speed) => {
        this.speed = speed
    }

    brake = (brake) => {
        this.speed = this.speed - brake
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

console.log(ford.describe());


var bmw = new car ("BMW", 0)
bmw.accelerate(200)
console.log(bmw);

bmw.brake(120)

console.log(bmw.describe());


