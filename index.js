
// Write your code here
//multiply
let num1 = 31;
let num2 =2;
const multiply = num1 * num2;

//a random integer greater than zero
let random = Math.floor(Math.random() * 10) + 1;

//mod
const num3 = 10;
const num4 = 6;
const mod =num3 % num4;

//max
const numbers = [6,12,'xyz',20,19];
const filteredNumbers = numbers.filter(num => typeof num === 'number');

const max = filteredNumbers.length > 0 ? Math.max(...filteredNumbers) :NaN;
