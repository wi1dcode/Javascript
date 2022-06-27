class tv {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    maxVolume = (volume) => {
        this.volume = Math.max(Number(0), Math.min(Number(100), Number(volume)));
    }
}

var showTv = new tv('Sony', 2, 99)
showTv.maxVolume(105)
console.log(showTv);