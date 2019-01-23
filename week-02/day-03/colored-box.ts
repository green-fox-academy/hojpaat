'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

let colors: string [] = ['green', 'red', 'blue', 'yellow'];

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(300, 100);
ctx.stroke();
ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 200);
ctx.stroke();
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 100);
ctx.stroke()

