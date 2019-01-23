'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


function centerBox (x: number = 10) {
  for (let i: number = 3; i > 0; i--){
    let red: number = (Math.floor(Math.random() * 256));
    let green: number = (Math.floor(Math.random() * 256));
    let blue: number = (Math.floor(Math.random() * 256));
    let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    ctx.fillStyle = color;
    ctx.fillRect(300 - x * 0.5 * (i + 1), 200 - x * 0.5 * (i + 1), x * (i + 1), x * (i + 1));
    ctx.fill();
  }
}

centerBox(30);