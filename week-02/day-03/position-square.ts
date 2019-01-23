'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function drawSquares( x: number = 0, y: number = 0) {
  ctx.fillRect(x, y, 50, 50);
  let red: number = (Math.floor(Math.random() * 256));
  let green: number = (Math.floor(Math.random() * 256));
  let blue: number = (Math.floor(Math.random() * 256));
  let rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  ctx.fillStyle = rgb;
  ctx.fill();
}

for (let i: number = 0; i < 3; i++){
  drawSquares(i* 10 + 200, i * 36 -10);
}