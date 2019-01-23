'use strict';
export{}

// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers: number [] = [4, 5, 6, 7];

function printOut (a: number): any {
  console.log (a);
}


integers.forEach(printOut);

