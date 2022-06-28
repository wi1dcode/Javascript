// 01 - Map Double

const array = [1, 2, 3, 4, 5];

const double = array.map((array) => {
    return array * 2
})

console.log(double);

// 02 - Map Names

const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

const shortNames = longNames.map((longNames) => {
    const name = `name: ${longNames.firstName} ${longNames.lastName}`
    return name
    
})

console.log(shortNames);
