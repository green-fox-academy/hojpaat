'use strict';

const mapWith = (array, callback) => {
  let output = [];
  output = array.map(element => callback(element));
return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string
const removeSecondLetter = (string) => {
  return string[0].concat(string.substr(2));
}
const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']