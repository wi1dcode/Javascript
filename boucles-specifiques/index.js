//  ********************** 01 - Map Double **********************

// const array = [1, 2, 3, 4, 5];

// const double = array.map((array) => {
//     return array * 2
// })

// console.log(double);

// **********************  02 - Map Names **********************

// const longNames = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]

// const shortNames = longNames.map((longName) => {
//     return {
//         name: `${longName.firstName} ${longName.lastName}`
//     }
    
// })

// console.log(shortNames);


// ********************** 03 - Filter Numbers **********************

// const elements = [1, "toto", 34, "javascript", 8] 

// const numbers = elements.filter((element) => {
//     return typeof(element) === "number"
// })

// console.log(numbers);

// ********************** 04 - Filter Even **********************

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const even = numbers.filter((number) => {
//         return number % 2 === 0
// })

// console.log(even);


// ********************** 05 - Cakes **********************

// const cakes = [
//         {
//             name: "cake",
//             flavor: "vanilla",
//             status: "available"
//         },
//         {
//             name: "brownie",
//             flavor: "chocolate",
//             status: "available"
//         },
//         {
//             name: "pie",
//             flavor: "strawberry",
//             status: "available"
//         },
//         {
//             name: "muffin",
//             flavor: "pistachio",
//             status: "available"
//         },
//         {
//             name: "donut",
//             flavor: "chocolate",
//             status: "available"
//         },
//     ]

// const chocolates = cakes.filter((cake) => {
//     return cake.flavor === "chocolate"
// })

// const soldOut = chocolates.map((chocolate) => {
//     chocolate.status = "sold out !"
//     return chocolate
// })

// console.log(soldOut);


// ********************** 06 - Cake v2 **********************

// const pie = cakes.find((cake) => {
//     return cake.name === "pie"
// })

// console.log(pie);

// ********************** 07 - Factorielle forEach **********************


// const table = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = 1

// table.forEach((num) => {
// 	result = result * num
// })

// console.log(result)


// ********************** 08 - Chess board **********************

const lenght = [0, 1, 2, 3, 4, 5, 6, 7]

lenght.forEach((line, i) => {
    let stringLine = ""

    lenght.forEach((square, j) => {
        if ((i + j) % 2 === 0) {
            stringLine = stringLine + `[ ]`
        } else {
            stringLine = stringLine + `[x]`
        }
})



console.log(stringLine);
})


// ********************** 09 **********************
