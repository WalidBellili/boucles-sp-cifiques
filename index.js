// exo1
// const array = [1, 2, 3, 4, 5]

// const double = array.map((multiplication) => {
//     console.log(multiplication);
//     return multiplication * 2
    
// })
// console.log(double);

// exo2

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
//     console.log(longName);
//     return {name : `${longName.firstName} ${longName.lastName}`}
// }) 
// console.log(shortNames);

// exo3

// const array = [1, "toto", 34, "Javascript", 8]
// const numbers = array.filter((number, i) => {
//     // console.log(number);
//     return number> 0
// })
// console.log(numbers);

// 04 - Filter Even

const numbers = [1, 2, 3, 4, 5, 6, 7,8]
const event = numbers.filter((number, i) => {
    
     if (number % 2 === 0) {
        console.log("EVEN !"+number);
    } else {
        console.log("ODD !" + number);
    }
})
// console.log(numbers);