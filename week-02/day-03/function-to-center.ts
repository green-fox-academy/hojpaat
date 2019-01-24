'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLineCenter (x: number = 0, y: number = 0) {
  ctx.beginPath()
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}




function drawLines (distance: number = 20){
  let coordinateX = 0;
  let coordinateY = 0;
  for (let i: number = 0; i < (600 / distance); i++) { //upper lines
    drawLineCenter(coordinateX, coordinateY);
    coordinateX += distance;
  }
  
  for (let j: number = 0; j < 400 / distance; j++) { //right side lines
    drawLineCenter(coordinateX, coordinateY);
    coordinateY += distance;
  }
  
  for (let i: number = 0; i < (600 / distance); i++) { //bottom lines
    drawLineCenter(coordinateX, coordinateY);
    coordinateX -= distance;
  }
  
  for (let j: number = 0; j < 400 / distance; j++) { //left side lines
    drawLineCenter(coordinateX, coordinateY);
    coordinateY -= distance;
  }
}


drawLines(20);