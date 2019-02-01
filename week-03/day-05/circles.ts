const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function colorful(){

  let color: string = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;

}

let color01 = colorful();
let color02 = colorful();
let color03 = colorful();
let color04 = colorful();

function circle(x: number, y: number, r: number, color: string = color01){
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  if(r > 10){
    circle(x, y - r * 0.5, r * 0.5, color01)
    circle(x + Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5, color02);
    circle(x - Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5, color03);
  }

}



function circle2(x: number, y: number, r: number, color: string = 'green'){
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  if(r > 100){
    circle2(x, y - r * 0.5, r * 0.5, color02)
    circle2(x + Math.sqrt(3/4 * r ** 2 / 4), y - r * 0.25, r * 0.5, color03);
    circle2(x + Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5, color02);
    circle2(x, y + r * 0.5, r * 0.5, color03)
    circle2(x - Math.sqrt(3/4 * r ** 2 / 4), y + r * 0.25, r * 0.5, color02);
    circle2(x - Math.sqrt(3/4 * r ** 2 / 4), y - r * 0.25, r * 0.5, color03);
  }

}

circle(300, 300, 300);
// circle2(300, 300, 300, color01)