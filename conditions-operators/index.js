// 01 - Comparaison

const test = 143
const bis = 219
console.log(test > bis)
console.log(test < bis)
console.log(test >= bis)
console.log(test <= bis)
console.log(test != bis)
console.log(test !== bis)

// 02 - Condition

const limit = 50
let score = 64

if (score >= limit) {
    console.log('Ok good!')
} else {
    console.log('Oh nooo...')
}

// 03 - Condition II

const password = "azertry"

if (password.length >= 6) {
    console.log("The password is secure")
} else {
    console.log("Password is not secure!")
}

// 04 - Condition III

if (score >= limit && password.length >= 6) {
    console.log("Everything is good")
} else if (score >= limit || password.length >= 6) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}

// 05 - Random

const random = Math.floor(Math.random() * 6) + 1

console.log("Random number is ", random)
if (random === 6) {
    console.log("Yes, i win!")
} else {
    console.log("So close...")
}

// 06 - Month

const month = "January"

switch (month) {
    case "January": case "February": case "December":
        console.log("This is Winter")
    break;
    case "March": case "April": case "May":
        console.log("This is Spring")
    break;
    case "June": case "July": case "August":
        console.log("This is Summer")
    break;
    case "September": case "Octomber": case "November":
        console.log("This is Fall") 
}

// 07 - Rounded but better

let roundedNumber = 4.3
 
// const differenceFlor = roundedNumber - Math.floor(roundedNumber)
// const differenceCeil = Math.ceil(roundedNumber) - roundedNumber

// if (differenceFlor < differenceCeil) {
//     console.log(Math.floor(roundedNumber))
// } else {
//     console.log(Math.ceil(roundedNumber))
// }

// 08 - Rounded but better, Méthode 2

// roundedNumber = roundedNumber.toString()
// let index = roundedNumber.indexOf(".")
// let decimale = roundedNumber.substring(index)
// decimale = parseFloat(decimale)
// if (decimale < 0.5)  {
//     console.log(Math.floor(roundedNumber))
// } else {
//     console.log(Math.ceil(roundedNumber))
// }

roundedNumber = roundedNumber.toString()
let word = roundedNumber.split("")[2]
console.log(word)

if (word < 5)  {
    console.log(Math.floor(roundedNumber))
} else {
    console.log(Math.ceil(roundedNumber))
}