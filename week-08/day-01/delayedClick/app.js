'use strict';

function message(inputMessage){
  let body = document.querySelector('body');
  let newP = document.createElement('div');
  newP.innerText = inputMessage;
  body.appendChild(newP);
}
  
  document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('button');
    
    button.addEventListener('click', () => {

      setTimeout(()=>message('2 second ellapsed'), 2000);
  })
})