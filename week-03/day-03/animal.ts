'use strict';

class Animal {
  hungerValue: number;
  thirstValue: number;
  name: string;

  constructor (inputName: string, hungerLevel: number = 50){
    this.name = inputName;
    this.hungerValue = hungerLevel;
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


export{Animal};