'use strict';

function message (inputMessage){
  let body = document.querySelector('body');
  let newP = document.createElement('div');
  newP.innerText = inputMessage;
  body.appendChild(newP);
}

let click = 0;
function setClick(inputClick, inputNode){
  inputClick += 1;
  inputNode.setAttribute('data-click', inputClick);
  return inputClick;
}

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button');
  
  window.onload =() => {
    setTimeout(() => {button.setAttribute('class', 'clickable')}, 5000);
  }

  button.onclick = () => {
    if(button.getAttribute('class') === 'clickable'){
      click = setClick(click, button);
      if(button.dataset.click >= 3){
        message('5 seconds elapsed and clicked 3 times');
      }
    }
  }
})
