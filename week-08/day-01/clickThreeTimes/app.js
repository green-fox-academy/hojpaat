'use strict';

function message (inputMessage){
  let body = document.querySelector('body');
  let newP = document.createElement('div');
  newP.setAttribute('data-click', 1);
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
  // button.addEventListener('click', () => {console.log('now')});
  button.onclick = (e) => {
    click = setClick(click, button);
    // click += 1;
    // button.setAttribute('data-click', click);
    
  }
})

// function message(inputMessage){
//   let body = document.querySelector('body');
//   let newP = document.createElement('div');
//   newP.innerText = inputMessage;
//   body.appendChild(newP);
// }
  
//   document.addEventListener('DOMContentLoaded', () => {
//     let button = document.querySelector('button');
    
//     button.addEventListener('click', () => {

//       setTimeout(()=>message('2 second ellapsed'), 2000);
//   })
// })