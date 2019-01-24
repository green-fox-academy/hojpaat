'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'Black';
ctx.fillRect(0, 0, 600, 400);
ctx.fill()

function drawStarts () {
  let coordinateX: number = Math.floor(Math.random() * 595);
  let coordinateY: number = Math.floor(Math.random() * 395);
  let grey: number = Math.floor(Math.random()*256);
  let color: string = 'rgb(' + grey + ', ' + grey + ', ' + grey + ' )';
  ctx.fillStyle = color;
  ctx.fillRect(coordinateX, coordinateY, 2, 2);
  ctx.fill()
}
function skyWalker () {
  let n: number = Math.floor(Math.random() * 800);
  for (let i: number = 0; i < n; i++) {
    drawStarts()
  }
}

skyWalker();