'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



// function linePlay (distance: number = 10, devider: number = 4, color1: string = 'green', color2: string = 'blue') {
//   // for (let j: number = 0; j < (devider / 4); j++) {
//   let fix: number = Math.sqrt(devider);
//     for (let i: number = 0; i < canvas.height / fix /distance; i++) {
//       //upper lines
//       ctx.beginPath();
//       ctx.strokeStyle = color1;
//       ctx.moveTo(canvas.width / fix, canvas.height / fix - (i * distance));
//       ctx.lineTo(canvas.width / fix - (i * distance), 0);
//       ctx.stroke();
//       // bottom lines
//       ctx.beginPath();
//       ctx.strokeStyle = color2;
//       ctx.moveTo(0, 0 + (i * distance));
//       ctx.lineTo(0 + (i * distance), canvas.height / fix);
//       ctx.stroke();
      
//     }
    
//     for (let i: number = 0; i < canvas.height / fix /distance; i++) {
//       //upper lines
//       ctx.beginPath();
//       ctx.strokeStyle = color1;
//       ctx.moveTo(canvas.width, canvas.height / fix - (i * distance));
//       ctx.lineTo(canvas.width - (i * distance), 0);
//       ctx.stroke();
//       // bottom lines
//       ctx.beginPath();
//       ctx.strokeStyle = color2;
//       ctx.moveTo(canvas.width / fix, 0 + (i * distance));
//       ctx.lineTo(canvas.width / fix + (i * distance), canvas.height / fix);
//       ctx.stroke();
      
//     }
    
      
//     for (let i: number = 0; i < canvas.height / fix /distance; i++) {
//       //upper lines
//       ctx.beginPath();
//       ctx.strokeStyle = color1;
//       ctx.moveTo(canvas.width / fix, canvas.height - (i * distance));
//       ctx.lineTo(canvas.width / fix - (i * distance), canvas.height / fix);
//       ctx.stroke();
//       // bottom lines
//       ctx.beginPath();
//       ctx.strokeStyle = color2;
//       ctx.moveTo(0, canvas.height / fix + (i * distance));
//       ctx.lineTo(0 + (i * distance), canvas.height);
//       ctx.stroke();
      
//     }
    
//     for (let i: number = 0; i < canvas.height / fix /distance; i++) {
//       //upper lines
//       ctx.beginPath();
//       ctx.strokeStyle = color1;
//       ctx.moveTo(canvas.width, canvas.height - (i * distance));
//       ctx.lineTo(canvas.width - (i * distance), canvas.height / Math.sqrt(devider));
//       ctx.stroke();
//       // bottom lines
//       ctx.beginPath();
//       ctx.strokeStyle = color2;
//       ctx.moveTo(canvas.width / Math.sqrt(devider), canvas.height / Math.sqrt(devider) + (i * distance));
//       ctx.lineTo(canvas.width / Math.sqrt(devider) + (i * distance), canvas.height);
//       ctx.stroke();
      
//     }
//   }
// // }


// linePlay( 20, 16, 'yellow', 'grey');


function linePlay (distance: number = 10, devider: number = 4, color1: string = 'green', color2: string = 'blue') {
   for (let i: number = 0; i < canvas.height / fix /distance; i++) {
      //upper lines
      ctx.beginPath();
      ctx.strokeStyle = color1;
      ctx.moveTo(canvas.width / fix, canvas.height / fix - (i * distance));
      ctx.lineTo(canvas.width / fix - (i * distance), 0);
      ctx.stroke();
      // bottom lines
      ctx.beginPath();
      ctx.strokeStyle = color2;
      ctx.moveTo(0, 0 + (i * distance));
      ctx.lineTo(0 + (i * distance), canvas.height / fix);
      ctx.stroke();
      
    }
}


