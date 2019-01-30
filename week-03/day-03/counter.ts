'use strict';

class counter {
  amount: number;
  initialVal: number;
  constructor(amount: number = 0){
    this.amount = amount;
    this.initialVal = amount;
  }

  add(increaser: number = 1){
    this.amount += increaser;
  }

  get () {
    console.log(`${this.amount}`);
  }

  reset () {
    this.amount = this.initialVal;
  }
}

let test = new counter(10);
test.add(12);
test.get();
test.reset();
test.get()