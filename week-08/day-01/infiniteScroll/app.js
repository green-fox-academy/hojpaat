'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let body = document.querySelector('body');

  const randomNumber = function randomNumberGenerator (min, max){
    return Math.round(Math.random() * (max - min) + min);
  }
  
  const createDiv = function divCreation(numberOfDivs){
    for( let i = 0; i < numberOfDivs; i++){
      let newDiv = document.createElement('div');
      newDiv.setAttribute('style', `background: rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)}`)
      body.appendChild(newDiv);
    }
  }
  
  createDiv(10);

  let scrollThreshold = 10 * 200 - window.innerHeight;
  window.addEventListener('scroll', () => {
    let bottom = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
    console.log(scrolled);
    console.log(scrollThreshold)
    if(scrolled >= scrollThreshold){
      createDiv(10);
      scrollThreshold += 2000;
    }
  })
})
