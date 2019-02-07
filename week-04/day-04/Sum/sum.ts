'use strict';

export class Numbers{
  numbers: number[] = [];

  constructor(input: number []){
    this.numbers = this.numbers.concat(input);
  }

  sum(): number{
    return this.numbers.reduce((accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    }, 0);
  }

}



