// 01 - Fruits

const fruits = ["mango", "lemon","blueberry"]
console.table(fruits)

// 02 - Access

const ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])

// 03 - Add and Remove

const objects = ["pen", "book", "lamp"]
objects.unshift("chair")
console.log(objects)
objects.pop()
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift()
console.log(objects)


// 04 - Order

const numbers = ["4", "10", "8,", "12", "6"]
numbers.reverse()
console.log(numbers)

// 05 - Boucle

let total = 0
const limit = 10

for (let i = 0; i <= limit; i++) {
    total = total + i
    console.log(total)
}

// 06 - Reverse

const sentence = "Hello Konexio!"
const final = [""]

for (let i = sentence.length; i > -1; i--) {
    reverse = sentence.charAt(i)
    final.push(reverse)
    
}
console.log(final.join(""))

// 07 - Fizzbuzz


// for (let i = 0; i <= 100; i++) {

//     if (i % 7 === 0) {
//         console.log("")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("flizzbuzz")
//     } else if (i % 3 === 0) {
//         console.log("fizz")
//     } else if (i % 5 === 0) {
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }


// 08 - While

let totalNew = 0
let limitNew = 10
let i = 0

while (i < limitNew) {
    i += 1
    totalNew = totalNew + i
    console.log(totalNew)
}

// 09 - Sans boucle

const names = ["Walid", "Thomas", "Wade"]
random = Math.floor((Math.random() * names.length))
console.log(names[random])

// 10 - Random and max

const table = []


for (let i = 0; i < 20; i++) {
    table[i] = Math.floor(Math.random() * 101);
}

console.log(table)
let max = table[0]

for (let i = 0; i < 20; i++) {
    if (table[i] > max) {
        max = table[i]
    }
}
console.log(max)
  