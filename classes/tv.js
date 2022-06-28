const defaultChannel = 1
const defaultVolume = 50

class tv {
    constructor(brand) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    inscreaseVolume = () => {
        if (this.volume < 100) {
        this.volume = this.volume + 1
        }
    }

    decreaseVolume = () => {
        if (this.volume > 0) {
            this.volume = this.volume - 1
        }
    }

    changeChannel = num => {

        if (num >= 1 && num <= 50) {
        this.channel = num
        }
    }

    reset = () => {
        this.channel = defaultChannel
        this.volume = defaultVolume
    }

    describe = () => {
        console.log(`Marque: ${this.brand}, channel: ${this.channel}, volume: ${this.volume}`);
    }
    
}

const sony = new tv("Sony")
sony.describe()

for (let i = 0; i < 5; i++) {
    sony.inscreaseVolume()
}
sony.describe()

for (let i = 0; i < 10; i++) {
    sony.decreaseVolume()
}
sony.describe()

sony.changeChannel(3)
sony.describe()

sony.reset()
sony.describe()