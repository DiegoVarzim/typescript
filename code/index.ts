
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

