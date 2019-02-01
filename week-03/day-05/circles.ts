const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function colorful(){

  let color: string = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;

}

function circle(x: number, y: number, r: number){
  ctx.beginPath();
  ctx.fillStyle = `rgba(${colorful()}, 1)`;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  if(r > 10){
    circle(x, y - r * 0.5, r * 0.5)
    circle(x + Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5);
    circle(x - Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5);
  }

}

let color1 = 'red';
let color2 = 'green';
let color3 = 'yellow';
let color4 = 'pink';
let color5 = 'blue';
let color6 = 'gray';


function circle2(x: number, y: number, r: number, color){
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  if(r > 120){
    circle2(x, y - r * 0.5, r * 0.5, color2)
    circle2(x + Math.sqrt(3/4 * r ** 2 / 4), y - r * 0.25, r * 0.5, color3);
    circle2(x + Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5, color5);
    circle2(x, y + r * 0.5, r * 0.5, color4)
    circle2(x - Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5, color1);
    circle2(x - Math.sqrt(3/4 * r ** 2 / 4), y - r * 0.25, r * 0.5, colorful());
  }

}

circle2(300, 300, 300, color1);