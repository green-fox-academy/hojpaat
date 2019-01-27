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

function checkerboard1 (size: number = 10){
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
    for (let i: number = j; i < n + 1+ j; i++){
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

// more simple
function checkerboard2(size: number = 8, k1: string = 'black', k2: string = 'white'){
  let k: string = '';
  let c: number = Math.floor(600/size);
  let r: number = Math.floor(400/size);
  let x: number = 0;
  let y: number = 0;

  for (let j: number = 0; j < r + 1; j++){
    
    for(let i: number = j; i < c + 1 + j; i++){
      if (i % 2 === 0){
        k = k1;
      } else {
        k = k2;
      }
      drawingSquares(x, y, 50, k);
      x += 50;
    }
    x = 0;
    y += 50;
  }
}






checkerboard2(30, 'grey', 'pink');
// checkerboard(50);