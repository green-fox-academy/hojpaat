'use strict';
export{}

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


let matrix1: number [][] = [];
let matrixDimension: number = 2;
let myArray: number [] = [1];
myArray.push(0);
console.log(myArray);

for (let i: number = 0; i < matrixDimension; i++) {
  for (let j: number = 0; i < matrixDimension; j++) {
    if (j === i) {
      matrix1[i][j] = 1;
    } else {
    matrix1[i][j] = 0;
    }
  }
}
console.log(matrix1);