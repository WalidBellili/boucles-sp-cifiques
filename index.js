// exo1
// const array = [1, 2, 3, 4, 5]

// const double = array.map((multiplication) => {
//     console.log(multiplication);
//     return multiplication * 2
    
// })
// console.log(double);

// exo2

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
const shortNames = longNames.map((longName) => {
    console.log(longName);
    return {name : `${longName.firstName} ${longName.lastName}`}
}) 
console.log(shortNames);

// exo3

// const array = [1, "toto", 34, "Javascript",]