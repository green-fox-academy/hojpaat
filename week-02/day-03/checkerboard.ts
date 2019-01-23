'use stict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function drawingSquares (kx: number = 0, ky: number = 0, w: number = 10, color: string = 'black') {
  ctx.fillStyle = color;
  ctx.fillRect(kx, ky, w, w); // x is the coordinate, w is the width = height
  ctx.fill();
}

let size: number = 10;

function checkerboard (size: number = 10){
  let coordinateX: number = 0;
  let coordinateY: number = 0;
  let n: number = Math.floor(600/size);
  let m: number = Math.floor(400/size);
  
  for (let j: number = 0; j < (m + 1); j++){
    if (j % 2 === 0) {
      coordinateX = size;
    } else {
      coordinateX = 0;
    }
    for (let i: number = 0; i < n + 1; i++){
      if ((coordinateX + size * j) % (size * 2) !== 0) {
      drawingSquares(coordinateX, coordinateY, size, 'black');
      coordinateX += size;
    } else {
      drawingSquares(coordinateX, coordinateY, size, 'white');
      coordinateX += size;
    }
  }
  coordinateY += size;
}
}

checkerboard(50);