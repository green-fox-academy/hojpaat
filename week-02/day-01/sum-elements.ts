'use strict';
export{}


// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let r: number [] = [54, 23, 66, 12];

function sum (a: number [] = r, b: number = 1, c: number = 2) {
  console.log(a[b] + a[c]);
}

sum();