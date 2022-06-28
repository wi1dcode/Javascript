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

// const shortNames = longNames.map((longNames) => {
//     const name = `name: ${longNames.firstName} ${longNames.lastName}`
//     return name
    
// })

// console.log(shortNames);


// ********************** 03 - Filter Numbers **********************

// const array = [1, "toto", 34, "javascript", 8] 

// const numbers = array.filter((array) => {
//     if (typeof(array) === "number") {
//         return array
//     }
// })

// console.log(numbers);

// ********************** 04 - Filter Even **********************

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const even = numbers.filter((numbers) => {
    if (numbers % 2 === 0) {
        return numbers
    }
})

console.log(even);