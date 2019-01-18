'use strict';
export{}

let sum: number = null;
let numb: number = 8;
let addition: number = null;
let average: number = null;


for (let i: number = 0; i < numb; i++) {
    console.log("Please write a number");
    addition += (i + 5);
    sum += addition;
}
average = sum / numb;
console.log(average);
console.log(sum);
