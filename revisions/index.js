class sortLetters {
    constructor(string) {
        this.string = []
    }


    sortString = (string) => {
        this.string = string
    }

}

var sortAlphabets = function(text) {
    return text.split('bba').sort().join('ba');
};

console.log(sortAlphabets);

var change = new sortLetters
change.sortString("konexio")
console.log(change);