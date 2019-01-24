'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



function ternary(xOriginal: number = 50, yOriginal: number = 350, distance: number = 50, ammount: number = 8) {
  let coordX: number = xOriginal;
  let coordY: number = yOriginal;
  let fix: number = Math.sqrt(distance ** 2 * 0.75);
  
  for (let j: number = 0; j < ammount; j++){
    
    
    for (let i: number = j; i < ammount; i++) {
      
    ctx.beginPath();
    ctx. moveTo(coordX, coordY);
    ctx.lineTo(coordX += distance, coordY);
    ctx.lineTo(coordX -= (distance * 0.5), coordY - (fix));
    coordX += distance * 0.5;
    ctx.stroke();
  }
  coordY -= fix;
  coordX -= distance * 0.5;

    for (let i: number = j; i < ammount - 1; i++){
      ctx.beginPath();
      ctx.moveTo(coordX, coordY);
        ctx.lineTo(coordX - distance * 0.5, coordY + fix);
        ctx.moveTo(coordX, coordY);
        ctx.lineTo(coordX - distance, coordY);
        ctx.stroke();
        coordX -= distance;
    }
  }

  ctx.beginPath();
  ctx.moveTo(coordX, coordY);
  ctx.lineTo(xOriginal, yOriginal);
  ctx.stroke();

}

ternary(50, 550, 50, 10);

let xOriginal: number = 50;
let yOriginal: number = 550;
let A: number = 65;
let B: number = 0;
let C: number = 15;
let distance: number = 50;
let fix: number = Math.sqrt(distance ** 2 * 0.75);

//ternary calculation
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(xOriginal, yOriginal);
ctx.lineTo(xOriginal += (100 - A) * distance * 0.1, yOriginal);
ctx.stroke();
ctx.beginPath()
ctx.strokeStyle = 'green';
ctx.moveTo(xOriginal, yOriginal);
ctx.lineTo(xOriginal -= C * 0.1 * 0.5 * distance, yOriginal -= fix * C * 0.1);
ctx.stroke();

let ternaryX: number = xOriginal;
let ternaryY: number = yOriginal;

// ternary drawing
// ternaryX = xOriginal + (100 - A) * distance * 0.1 - (C * 0.1 * 0.5 * distance);
// ternaryY = yOriginal - fix * C * 0.1;

let grainSize: number [] = [65, ]

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(ternaryX, ternaryY, 10, 0, Math.PI * 2);
ctx.stroke();

// ctx.beginPath()
// ctx.arc(ternaryX, ternaryY, 20, 0, math.PI * 2)
// ctx.storke()



