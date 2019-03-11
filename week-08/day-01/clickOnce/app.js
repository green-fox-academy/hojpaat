'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button');
//solution1
  /*button.addEventListener('click', () => {
    console.log(Date());
    button.setAttribute('disabled', 'true');    
  })*/
//solution2
  button.addEventListener('click', (e) => {
    let buttonClasses = Array.from(button.classList);
  if(buttonClasses.indexOf('unclickable') < 0){
    console.log(Date());
  button.setAttribute('class', 'unclickable');
  }else{
    e.preventDefault();
  }
  })
})