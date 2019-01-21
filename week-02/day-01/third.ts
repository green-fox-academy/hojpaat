'use strict';
export{}

// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`


let magicNumbers: number [] = [1, 3, 5, 7];

function printOut (a = magicNumbers): any {
  console.log(a[2]);
}

let anotherArray: any [] = ['apple', 3, 'third', 3];

printOut(anotherArray);