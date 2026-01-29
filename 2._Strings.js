// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const exercise3Sum = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(exercise3Sum);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const exercise4Sum = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
const fixedDecimalSum = exercise4Sum.toFixed(2);
console.log(fixedDecimalSum);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum = one + two + three;
const average = sum/3;

console.log(average);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letter = letters.charAt(2);

console.log(letter);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

// Finds first instance of "j" and replaces, I'm assuming
const replacedLetterFact = fact.replace("j", "J");

console.log(replacedLetterFact);

// --------------------------------------



