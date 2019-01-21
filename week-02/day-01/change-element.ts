'use strict';
export{}

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number [] = [1, 2, 3, 8, 5, 6];

/*function changeEight (a: number []): any {
  for (let i: number = 0; i < a.length; i++) {
    if (a[i] === 8) {
      a[i] === 4;
    }
  }
}*/

let newArray: any [] = numList.map(function(a){
  if (a === 8) {
    a = 4;
  }
  return a;
});
console.log(newArray);

//console.log(numList[3]);
