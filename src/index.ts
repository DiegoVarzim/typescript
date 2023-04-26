
// const user = {
//     firstName: 'Diego',
//     age: 40,
//     lastName: 'S'
// }

// user.lastName = 'Varzim'


// // UNKNOWN

// let itemInput: unknown
// let itemName: string

// itemInput = 10
// itemInput = 'Apple'
// if (itemInput === 'string') {
//     itemName = itemInput
// }


// NEVER

// function generateError(message: string, code: number): never {
//     throw {message:message, errorCode: code}
// }

// generateError('The application crashed', 500)
// console.log(generateError('The application crashed', 500))

// TYPE USERS

// type Users = {
//     firstName: string
//     age: number
// }

// const user: Users = {
//     firstName: 'Diego',
//     age: 40
// }

// console.log(user)

// TYPE UNION

// function userInput(input1: number | string, input2: number | string) {
//     let result
//     if (typeof input1 == 'number' && typeof input2 == 'number') {
//         result = input1 + input2
//     }
//    else {
//         result = input1.toString() + input2.toString()
//    }
//     return result
// }

// const combinePrices = userInput(10, 20)
// console.log(combinePrices)

// const combineName = userInput('Apple', 'Avocado')
// console.log(combineName)


// LITERAL TYPE

// let productPrice: 10 | 20 | 30
// let productSize: 'S' | 'M' | 'L'

// productPrice = 20
// productSize = 'S'

// console.log(productPrice, productSize)


// INTERSECTION

// type User = {
//     firstName: string
//     age: number
// }

// type JobRole = {
//     id: number
//     role: string
// }

// type employee = User & JobRole
// const e1: employee = {
//     firstName: 'Diego',
//     age: 40,
//     id: 221,
//     role: 'Admin'
// }



// Day 3 - Exercise 1

// let pi = 3.14159;
// let tau = pi * 2;


// console.log(`${tau} is ${pi} times two.`);


// Day 3 - Exercise 2

// let pie: string
// pie = 'blueberry'

// console.log(`I like to eat ${pie}-flavored pie.`)


// Day 3 - Exercise 3

// let isDouglas: boolean
// isDouglas = true
// console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)

// Day 3 - Exercise 4

// const integer: number = 6;
// const float: number = 6.66;
// const hex: number = 0xf00d;
// const binary: number = 0b1010011010;
// const octal: number = 0o744;
// const negZero: number = -0;
// const actuallyNumber: number = NaN;
// const largestNumber: number = Number.MAX_VALUE;
// const mostBiglyNumber: number = Infinity;

// const members: number[] = [
//     integer,
//     float,
//     hex,
//     binary,
//     octal,
//     negZero,
//     actuallyNumber,
//     largestNumber,
//     mostBiglyNumber
// ];

// members[0] = 12345;

// console.log(members);



// Day 3 - Exercise 5

// const sequence: number[] = Array.from(Array(10). keys());
// const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
// const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
// const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];



// console.log(allMyArrays);


// Declaring all variables

let code: number = 71
console.log(code)


