'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function playLines (distance: number = 10, color1: string = 'blue', color2: string = 'red') {

  for (let i: number = 0; i < 20; i++) {
    //upper lines
    ctx.beginPath();
    ctx.strokeStyle = color1;
    ctx.moveTo(canvas.width, canvas.height - (i * distance));
    ctx.lineTo(canvas.width - (i * distance), 0);
    ctx.stroke();
    // bottom lines
    ctx.beginPath();
    ctx.strokeStyle = color2;
    ctx.moveTo(0, 0 + (i * distance));
    ctx.lineTo(0 + (i * distance), canvas.height);
    ctx.stroke();
    
  }
}

playLines(30, 'blue', 'orange');


