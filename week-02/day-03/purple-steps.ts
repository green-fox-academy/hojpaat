'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawSquaresDiagonal (x: number = 10, n: number = 1) {
  for (let i: number = 0; i < n; i++) {

    ctx.strokeStyle = 'black';
    ctx.fillStyle = ' purple';
    ctx.fillRect(0 + i * x, 0 + i * x, x, x);
    ctx.fill()
    ctx.strokeRect(0 + i * x, 0 + i * x, x, x);
    ctx.stroke()
  }
}


drawSquaresDiagonal(20, 15);