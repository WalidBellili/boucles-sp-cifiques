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

// const numbers = [1, 2, 3, 4, 5, 6, 7,8]
// const event = numbers.filter((number, i) => {
    
//      if (number % 2 === 0) {
//         console.log("EVEN !"+number);
//     } else {
//         console.log("ODD !" + number);
//     }
// })
// console.log(numbers);

// exo5

// const cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// const chocolate = cakes.filter((cake) => {
    
//     if ( cake.flavor ==="chocolate") {
//         return cake   
//     }

// }).map((cake) => {
//      cake.status = "sold Out !"
//      return cake
// })
// console.log(cakes);
// console.log(chocolate);

// exo6

// const cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]
// const pie = cakes.find((cake) => {
    
//     return cake.name === "pie"
// })
// console.log(pie);

// 07 - Factorielle forEach

// const numbers = [1,2,3,4,5,6,7,8,9]

// let result = 1
// numbers.forEach((num, index) => {
//     result *=  num
// })
// console.log(result);


// exo8
const elements = [0,1,2,3,4,5,6,7]
elements.forEach((element) => {
     
    elements.forEach((element) => {
    })
    if (true) {
        box1 =`[ ][x ][ ][x ][ ][x ][ ][ x]`
        console.log(box1);
    } 
    elements.forEach((element) => {
        if (true) {
            box2 =`[x ][ ][x ][ ][x ][ ][x ][ ]`
            console.log(box2);

        } 
    })
})

// exo9

// const array = [12, 55, "hello", true, { isStudent: false }, 3]
// const numbers = array.filter((number, i) => {
//     // console.log(number);
//     if (number> 0) {
//         return number
//     } else if (number === true){
//         return number - true
//     }
// })
// console.log(numbers);

