"use strict";
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
// class Employee {
//     constructor(public title: string, public salary: number) {}
// }
// const employee = new Employee('Engineer', 1100000);
// console.log(`The new employee's title is ${employee.title}) and they earn $ ${employee.salary}.`);
// DAY 5 - EXERCISE 5
// interface UserSchema {
//     id: number
//     name: string
// }
// class User implements UserSchema {
//     constructor(public name: string, readonly id: number) {}
// }
// const user = new User('Dog', 1)
// console.log(user.id)
// user.name = 'Harold' // pode mudar
// console.log(`User:`, user)
// READOLY - dentro de classes no TS
// class Movies {
//     constructor(
//         public readonly id: number, 
//         public name: string, 
//         private _price: number
//         ) {
//     }
// }
// let movie1 = new Movies(1, 'Interstellar', 20)
// console.log(movie1)
// class HotelRooms {
//     [roomNumber: string]: string
// }
// let room = new HotelRooms()
// room.A201 = 'Andre'
// room.A202 = 'Ana'
// room.A17 = 'Marcos'
// console.log(room)
// INHERITANCE
// class Person {
//     constructor(public firstName: string, public lastName: string, public age: number) {}
//     get greet() {
//        return this.firstName + ' ' + this.lastName
//     }
// }
// // Cliente do banco
// class Clients extends Person {
//    override get greet() {
//         return 'Dear ' + super.greet
//      }
// }
// // Funcionário do banco
// class Staff extends Person {
//     override get greet() {
//         return 'Hi ' + super.greet
//      }
// }
// let client1 = new Clients('Andre', 'Iacono', 25)
// let staff1 = new Staff('Ana', 'Silva', 30)
// console.log(client1.greet)
// console.log(staff1.greet)
// DAY 7 - EXERCISE 1
// interface User {
//     name: string
//     age: number
//     occupation: string
// }
// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }
// type Person = User | Admin;
// const persons: Person[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Muller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
// function logPerson(person: Person) {
//     let additionalInformation: string;
//     if ('role' in person) {
//         additionalInformation = person.role;
//     } else {
//         additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${add}`)
// }
// persons.forEach(logPerson);
// DAY 7 - EXERCISE 2
// class Animal {
//     constructor(public name: string) {}
//     move(meters: number) {
//         console.log(`${this.name} moved ${meters}m.`)
//     }
// }
// class Snake extends Animal{
//     move(meters: number = 5) {
//         console.log('Slithering...')
//     super.move(meters)
//     }
// }
// class Pony extends Animal{
//     move(meters: number) {
//         console.log('Galloping...')
//         super.move(meters)
//     }
// }
// const sammy = new Snake("Sammy the Snake")
// sammy.move()
// const pokey = new Pony("Pokey the Pony")
// pokey.move(34)
// DAY 7 - EXERCISE 3
// class Furniture {
//    constructor(protected manufacturer: string = 'IKEA') {}
// }
// class Desk extends Furniture {
//    kind() {
//        console.log(`This is a desk made by ${this.manufacturer}`)
//    }
// }
// class Chair extends Furniture {
//    kind() {
//        console.log(`This is a chair made by ${this.manufacturer}`)
//    }
// }
// const desk = new Desk()
// desk.kind()
// // desk.manufacturer // Deve retornar um erro
// const chair = new Chair()
// chair.kind()
// // chair.manufacturer // Deve retornar um erro
// DAY 7 - EXERCISE 4
// let multiply: (val1: number, val2: number) => number;
// let capitalize: (val: string) => string;
// multiply = function(x: number, y: number): number {
//    return x * y;
// }
// capitalize = function(value: string): string {
//       return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
// }
// console.log(capitalize(`nifty is ${multiply(6, 10)}`));
//  DAY 7 - EXERCISE 5
function layEggs(quantity, color) {
    console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
}
layEggs(10, 'reds');
