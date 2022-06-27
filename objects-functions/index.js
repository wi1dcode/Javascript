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
    time.minutes = Math.floor(minuteInitiale / 60)
    time.secondes = Math.floor(minuteInitiale % 60)
    return time
}

let calcul = format(5333)
console.log(calcul)

// 07 - Password generation

const generatePassword = num => {
    let password = ""
    
    for (i = 0; i < num; i++) {
        const min = 65
        const max = 90 - 65 + 1
        const random = Math.floor((Math.random() * max) + min)
        const letter = String.fromCharCode(random)


        password = password + letter
    }

    console.log(password);
}

generatePassword(8)



// 08

const getDiceResult = () => {
  const min = 1
  const max = 6
  const random = Math.floor(Math.random() * max) + min

  return random
}

const launchDice = numberOfDice => {
  let total = 0

  for (let i = 0; i < numberOfDice; i++) {
    const random = getDiceResult()
    total = total + random
  }

  return total
}

const player1 = launchDice(6)
const player2 = launchDice(3)

if (player1 < player2) {
  console.log(`Player 2 wins with ${player2}`)
} else if (player1 > player2) {
  console.log(`Player 1 wins with ${player1}`)
} else {
  console.log("Egalité")
}