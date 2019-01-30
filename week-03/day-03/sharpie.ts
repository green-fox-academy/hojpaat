'use strict';

class Sharpie {
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



export{Sharpie};