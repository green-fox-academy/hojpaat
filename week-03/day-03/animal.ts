'use strict';

class animal {
  hungerValue: number;
  thirstValue: number;

  constructor (){
    this.hungerValue = 50;
    this.thirstValue = 50;
  }

  eat(): number {
    return this.hungerValue -= 1;
  }

  drink (): number {
    return this.thirstValue -= 1;
  }

  play(): number {
    this.hungerValue += 1;
    this.thirstValue += 1;
    return this.hungerValue, this.thirstValue;
  }
}

let koala = new animal();
console.log(koala.hungerValue);
koala.play();
console.log(koala.hungerValue);
console.log(koala.thirstValue);