// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// en String med backticks kaldes en String template literal. At bruge ${}-syntaksen kaldes String interpolation
const introduction = `My first name is ${firstName} and my last name is ${lastName}`;

console.log(introduction);

// --------------------------------------


// Exercise 2 - Numbers and Strings

const year = "2025";
const increment = 1;

// Add the year plus the increment
// The result should be 2026
// You cannot touch the first or the second line

const yearAsNumber = parseInt(year);
const incrementedYear = yearAsNumber + increment;

console.log(incrementedYear);

// --------------------------------------

