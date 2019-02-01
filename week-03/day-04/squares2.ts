'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(x: number, y: number, width: number){
  ctx.strokeStyle = 'green';
  ctx.strokeRect(x, y, width, width)
  if(width > canvas.width / 20){
    setTimeout(() => {drawSquare(x+width/3, y, width/3)}, 2000);
    setTimeout(() => {drawSquare(x, y + width/3, width/3)}, 2000);
    setTimeout(() => {drawSquare(x + 2 * width / 3, y + width/3, width/3)}, 2000);
    setTimeout(() => {drawSquare(x + width / 3, y + width/ 3 * 2, width/3)}, 2000);
  }
}

drawSquare(0, 0, canvas.width);
