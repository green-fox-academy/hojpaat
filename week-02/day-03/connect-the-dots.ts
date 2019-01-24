'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let points1: number [][] = [
  [10, 10],
  [120, 10],
  [290, 290],
  [10, 290]
]

let points2: number [][] = [
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100]
]

function connectingDots(points: number [][],) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(points[0][0], points[1][1]);
  for (let i: number = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1]);
  }
  ctx.lineTo(points[0][0], points[1][1]);
  ctx.stroke();
}

connectingDots(points1);
connectingDots(points2);