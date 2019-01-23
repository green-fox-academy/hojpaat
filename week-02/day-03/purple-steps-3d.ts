'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let k: number = 0;

function drawSquaresBigger (x: number = 10, n: number = 1) {
  let w: number = x;
  ctx.fillStyle = ' purple';
  for (let i: number = 0; i < n; i++) {
    ctx.fillRect(k, k, w, w);
    ctx.fill()
    ctx.strokeRect(k, k, w, w);
    ctx.stroke();
    k += w; //the coordinates alway increase with the width
    w += x; //the width always increase with the original width
  };
}

drawSquaresBigger(10, 7);

// drawSquaresDiagonal(10, 15);