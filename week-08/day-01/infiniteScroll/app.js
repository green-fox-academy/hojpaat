'use strict';




document.addEventListener('DOMContentLoaded', () => {
  const randomNumber = function randomNumberGenerator (min, max){
    return Math.round(Math.random() * (max - min) + min);
  }
  
  const createDiv = function divCreation(numberOfDivs){
    for( let i = 0; i < numberOfDivs; i++){
      let newDiv = document.createElement('div');
      newDiv.setAttribute('style', `background: rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)},`)
      body.appendChild(newDiv);
    }
  }

  let body = document.querySelector('body');

  createDiv(3);


})
