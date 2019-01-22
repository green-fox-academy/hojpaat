'use strict';
export{}
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let matches: string[] = [];
function makingMatches (a: string [], b: string []): any{
    a.forEach(value => {
    matches.push(value);
  })
  console.log(matches)
  for (let i: number = 0; i < b.length; i++) {
    matches.splice((2 * i + 1), 0, b[i]);
    
  }
  return matches;
}

console.log(makingMatches(girls, boys));

export = makingMatches;