'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const randomNumber = function randomNumberGenerator (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  console.log(randomNumber(20, 0));
  console.log(randomNumber(20, 0));
  console.log(randomNumber(20, 0));
  console.log(randomNumber(20, 0));
  console.log(randomNumber(20, 0));

})
