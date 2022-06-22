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

const sentence = "Hello Konexio !"

for (let i = ""; i < sentence.length; i++) {
    
    console.log(i)
}

// 07 - Fizzbuzz

const finish = 100

for (let i = 0; i <= finish; i++) {
    i = i % 3 === 0 
    
    
    
    // if (i % 3 === 0) {
    //     console.log("fizz")
    // }

    // if (i % 5 === 0) {
    //     console.log("buzz")
    // }

    // if (i % 3 === 0 && i % 5 === 0) {
    //     console.log("flizzbuzz")
    // } 

    // if (i % 7 === 0) {
    //     console.log("")
    // } else {
    //     console.log(i)
    // }
}

