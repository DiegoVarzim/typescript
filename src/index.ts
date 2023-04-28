
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

// let code: number = 71
// console.log(code)


// class Users {
//     name: string
//     public balance: number = 0

//     constructor(n: string, b: number) {
//         this.name = n
//         this.balance = b
//     }

//     addMoney(amount: number) {
//         this.balance += amount
//     }
// }

// const user1 = new Users('Diego', 10)
// user1.balance = 500
// user1.addMoney(100)
// user1.addMoney(30)

// const user2 = new Users('Mariana', 20)
// user2.addMoney(30)
// user2.addMoney(50)

// console.log(user1)
// console.log(user2)




// interface Item {
//     name: string
//     price: number

//     itemPurchased(message: string): void

// }

// let product1: Item

// product1 = {
//     name: 'Apple',
//     price: 2,
//     itemPurchased(message: string) {
//         console.log(message + ' ' + this.name)
//     }
// }

// product1.itemPurchased('You just bought a')


// // DAY 5 - EXERCISE 1

// interface CartItem {
//     id: number
//     title: string
//     variantId?: number
// }

// function addToCart(item: CartItem) {
//     console.log(`Adding "${item.title}" to cart.`);
// }

// addToCart({id: 1, title: 'flops'});


// DAY 5 - EXERCISE 2


// interface Person {
//    name: string
//    age: number
// }

// class Person implements Person {
//     constructor(public name: string, public age: number) {}
// }

// const jane = new Person('Diego', 31);

// console.log(`${jane.name} is ${jane.age} years old.`);


// // DAY 5 - EXERCISE 3

// class MC {
//     greet(event: string = 'party'): string {
//         return `Welcome to the ${event}`;
//     }
// }

// const mc = new MC();
// console.log(mc.greet('show1'));


// DAY 5 - EXERCISE 4

class Employee {
    title: string;
    salary: number;
    constructor(title: string, salary: number) {
        this.title = title;
        this.salary = salary
    }
}

const employee = new Employee('Engineer', 100000);

console.log(`The new employee's title is ${employee.title}) and they earn $ ${employee.salary}.`);

