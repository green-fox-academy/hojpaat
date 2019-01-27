'use strict';
export{}
// const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');

let xOriginal: number = 0;
let distance: number = 10;
let hexagonHeight: number = Math.sqrt(0.75 * distance ** 2);

let xCoordinates: number [] = [];
for (let i: number =0; i < 4; i++){
  let r: number = xOriginal + distance * Math.cos(Math.PI * i / 3);
  xCoordinates.push(r);
}

let yCoordinates: number []= [];
for (let i: number = 0; i < 4; i++) {
  let r: number = Math.sin(Math.PI * i /3);
  yCoordinates.push(r);
  console.log(yCoordinates);
}


