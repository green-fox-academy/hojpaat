'use strict';

class sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor (color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use(){
    return this.inkAmount -= 1.3;
  }
}


let red = new sharpie('red', 0.3)
red.use();
red.use();
console.log(red.inkAmount);