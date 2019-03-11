'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button');

  button.addEventListener('click', () => {
    console.log(Date());
    button.setAttribute('disabled', 'true');
  })
})