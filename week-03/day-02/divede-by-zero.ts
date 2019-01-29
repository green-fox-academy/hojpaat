'use strict';


// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function diveder (inputNumber: number = 10) {
  if (inputNumber !== 0) {
    console.log(10 / inputNumber);
  }else {
  console.log('fail');
}
}

diveder(0)