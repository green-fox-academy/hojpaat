'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let rainbow: string []= ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

function centerBox (x: number = 10, color: string [] = []) {
  for (let i: number = color.length; i > 0; i--){
    ctx.fillStyle = color[i-1];
    ctx.fillRect(300 - x * 0.5 * (i + 1), 200 - x * 0.5 * (i + 1), x * (i + 1), x * (i + 1));
    ctx.fill();
  }
}

centerBox(30, rainbow);