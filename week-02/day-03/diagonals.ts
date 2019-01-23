'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

function rectangles (x: number = 0, y: number = 0, w: number = 50, h: number = 50) {
  if (x === 0 && y === 0) {
    ctx.fillStyle = 'green';
  } else {
    ctx.fillStyle = 'red';
  }
  ctx.fillRect(x, y, w, h);
}

rectangles();
rectangles(20, 20, 40, 80);