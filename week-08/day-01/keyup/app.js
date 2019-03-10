'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let h1 = document.querySelector('h1');
  window.addEventListener('keydown', (e) => {
    console.log(e);
    h1.textContent = `Last pressed key code is: ${e.key}`;
  })
})
