'use strict';
export{}


// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

//let summerie: number = 0;

function sum (a: number = 1) {
let summerie: number = 0;
  for (let i: number = 1; i < a + 1; i++) {
    summerie += 1;
  }
  console.log(summerie);
}
sum();

