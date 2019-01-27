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

//annotation
ctx.font = '30px Arial';
ctx.fillText('Clay', 25, 580);
ctx.fillText('Silt', 525, 580);
ctx.fillText('Sand', 260, 100);



//display the results

let xOriginal: number = 50;
let yOriginal: number = 550;
let distance: number = 50;
let fix: number = Math.sqrt(distance ** 2 * 0.75);

function classification (n: number []) {
  if (n[0] + n[1] + n[2] < 100) {
    ctx.font = '40px Arial';
    ctx.fillStyle = n[3];
    ctx.fillText('The total amount is less than 100%', 50, 200);
  }  else if (n[0] + n[1] + n[2] > 100) {
    ctx.font = '40px Arial';
    ctx.fillStyle = n[3];
    ctx.fillText('The total amount is more than 100%', 50, 200);
  } else {
    let ternaryX: number = xOriginal;
    let ternaryY: number = yOriginal;
    ternaryX += (100 - n[0]) * distance * 0.1 - (n[2] * 0.1 * 0.5 * distance); //first part: move from A toward B
    ternaryY -= fix * n[2] * 0.1;
    //start drawing
    ctx.beginPath();
    ctx.strokeStyle = n[3];
    ctx.lineWidth = 5;
    ctx.arc(ternaryX, ternaryY, 10, 0, Math.PI * 2);
    ctx.stroke();
  }
}

let result: any [] = [78, 12, 10, 'green'];
let result1: any [] = [0, 55, 33, 'blue'];
let results: any [][] = [
  [12, 55, 33, 'red'],
  [32, 16, 52, 'pink']
]

classification(results[0]);
classification(result);
classification(result1);



