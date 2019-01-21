'use strict';
export{}


// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio (a: number = 1): number{
  let fact: number = 0;
  if (a === 0) {
    fact = 1;
  } else {
    for (let i:number = 0; i < 4; i++) {
      fact = a * (factorio(a - 1));
    }
  }
  return fact;
};

console.log(factorio(5));