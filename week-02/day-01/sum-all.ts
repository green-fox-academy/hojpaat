'use strict';
export{}


// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number [] = [3, 4, 5, 6, 7];


// internet solution
//const sum = ai.reduce((total, amount) => total + amount);

//console.log(sum);

let sum: number = ai.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

let diff: number = ai.reduce((accumulator, currentValue) => {
  return accumulator - currentValue;
}, 2 * ai[0]);

console.log(diff);