'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

for (let i: number = 0; i < 4; i++) {
  let randomX: number = (Math.floor(Math.random() * 500));
  let randomY: number = (Math.floor(Math.random() * 400));
  let red: number = (Math.floor(Math.random() * 256));
  let green: number = (Math.floor(Math.random() * 256));
  let blue: number = (Math.floor(Math.random() * 256));
  let rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  ctx.fillStyle = rgb;
  ctx.fillRect(randomX, randomY, 50, 50);
}

