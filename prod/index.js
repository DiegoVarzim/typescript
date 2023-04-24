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
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('The application crashed', 500);
console.log(generateError('The application crashed', 500));
