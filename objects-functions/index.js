// 01 - Object
const cat = {
    name: "Garfield",
    age: "3",
    isCute: true
}

console.log(cat)
console.log("Cat age is:", cat.age)

if (cat.isCute = true) {
    console.log("So cute !")
}

// 02 - Combine

const cat2 = {
    name: "Tom",
    age: "2",
    isCute: true
}

let cats = [cat, cat2]
console.log(cat.age)
console.log(cat.isCute)

// 03 - Even

const checkIfEven = (num) => {
    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

checkIfEven(3);


// 04 - Compare

const compare = (x, y) => {
    if (x > y) {
        console.log(x, "is bigger");
    } else if (x < y) {
        console.log(y, "is bigger");
    } else if (x === y) {
        console.log(x, "et", y,"both are the same");
    }
}

compare(55, 55);

// 05 - Add Up

const addUp = (num) => {
    let resultat = 0
    for (let i = 1; i <= num; i++) {
        resultat = i + resultat
    }
    return resultat
}
let add = addUp(10)
console.log(add);

// 06 - Time

const format = (num) => {
    time = {
        heure: 0,
        minutes: 0,
        secondes: 0
    }
    time.heure = Math.floor(num / 3600)
    let minuteInitiale = Math.floor(num % 3600) 
    time.minutes = Math.floor(num / 3600)
    time.secondes = Math.floor(num / 3600)
    return time
}

let calcul = format(3700)
console.log(calcul)