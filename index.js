// 01 - Hello World

console.log("Hello World !")


// 02 - String

const sentence = "My name is Mago"
console.log(sentence)

// 03 - Concaténation

const name = "Mago"
console.log(`Nice to meet you ${name}`)

// 04 - String Length

const sentenceNew = "I'm a new text !"
console.log(sentenceNew.length)

// 05 - Replace

const food = "croissant is meh"
console.log(food.replace("meh", "so good"))

// 06 - Up and Down 

const basic = "This is Cool"
basicUp = basic.toUpperCase()
basicDown = basic.toLowerCase()
console.log(basic , basicUp , basicDown)

// 07 - Split

const word = "banana"
const letters = word.split("")
console.log(letters)

// 08 - Template

const age = 20
const template = `I'm ${age} years old`
console.log(template)


// Bonus

let changed = "Bonjour"
console.log(changed.replaceAll("o", "a"))