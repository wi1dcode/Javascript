class tv {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }



    changeVolume = (volume) => {
        this.volume = Math.max(Number(0), Math.min(Number(100), Number(volume)));
    }

    changeChannel = (channel) => {
        this.channel = Math.max(Number(0), Math.min(Number(50), Number(channel)));

    //     if (Math.min(Number(50))) {
           
    //     } else {
    //         this.channel = this.channel === this.channel
    //     }
    }

    reset = (reset) => {
        this.channel === this.channel
        this.volume === this.volume
    }
}

var showTv = new tv('Sony', 2, 99)
showTv.changeVolume(2)
showTv.changeChannel(66)
console.log(showTv);
console.log(showTv.reset());

// NOT FINISH