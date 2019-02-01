const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(100, Math.sqrt(3 / 4 * 200 ** 2));
ctx.lineTo(300, Math.sqrt(3 / 4 * 200 ** 2));
ctx.stroke();





let m: number = undefined;
function hexagon(x: number, y: number, d: number) {
  m = Math.sqrt(3 / 4 * d ** 2);
  ctx.beginPath();
  ctx.moveTo(x, y + m);
  ctx.lineTo(x + d / 2, y);
  ctx.lineTo(x + 1.5 * d, y);
  ctx.lineTo(x + 2 * d, y + m);
  ctx.lineTo(x + 1.5 * d, y + 2 * m);
  ctx.lineTo(x + d / 2, y + 2 * m);
  ctx.lineTo(x, y + m);
  ctx.stroke();
  ctx.moveTo(x, y);

  if(d > 20){
    hexagon(x + d, y + Math.sqrt(3/4 * d ** 2) * 0.5, d/2);
    hexagon(x + d * 0.25, y, d/2 );
    hexagon(x + d * 0.25, y + Math.sqrt(3/4 * d ** 2), d/2);
  }
  // ctx.beginPath();
  // ctx.strokeStyle = 'green';
  // ctx.moveTo(x, m);
  // ctx.lineTo(x + 2 * d, y + m);
  // ctx.stroke();


  
  // ctx.beginPath();
  // ctx.strokeStyle = 'green';
  // ctx.moveTo(x + d / 2, y);
  // ctx.lineTo(x + 1.5 * d, y + 2 * m);
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.strokeStyle = 'green';
  // ctx.moveTo(x + 1.5 * d, y);
  // ctx.lineTo(x + d / 2, y + 2 * m);
  // ctx.stroke();


}

hexagon(50, 50, 400);