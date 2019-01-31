'use strict';
// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function earCalc(n: number){
  if(n === 1){
    return 2;
  }else{
    return 2 + earCalc(n-1);
  }
}

console.log(earCalc(6));