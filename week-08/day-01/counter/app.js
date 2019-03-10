"use strict";

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button');
  let listElement = document.querySelectorAll('li');
  let result = document.querySelector('.result');

  
  button.addEventListener('click', () => {
    result.textContent = `The number of the elemens is ${listElement.length}.`;

  });
  
})