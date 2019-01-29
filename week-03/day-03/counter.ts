'use strict';

class counter {
  amount: number;

  constructor(amount: number = 0){
    this.amount = amount;
  }

  add(increaser: number = 1){
    return this.amount += increaser;
  }

  get () {
    console.log(`${this.amount}`);
  }

  reset () {
    this.amount = 0;
  }
}

let test = new counter();
test.add(12);
test.get();