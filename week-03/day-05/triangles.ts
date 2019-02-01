const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor(){
  let x = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  return x;
}

let color1 = randomColor()
let color2 = randomColor()
let color3 = randomColor()
let color4 = randomColor()

function drawTriangle(x: number = canvas.width / 2, y: number = canvas.width / 2, a: number = canvas.width / 2, color: string = color1){
  let m: number = Math.sqrt(3/4 * a **2);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x - a / 2, y);
  ctx.lineTo(x, y - m);
  ctx.lineTo(x + a / 2, y);
  ctx.lineTo(x - a / 2, y);
  ctx.fill();

  if(a > 50){
    drawTriangle( x - a / 2, y - m / 2, a / 2, color2);
    drawTriangle( x + a / 2, y - m / 2, a / 2, color3);
    drawTriangle( x, y + m / 2, a / 2, color4);
  }
}

drawTriangle()