'use strict';

abstract class CAB {
  mainNumber: number[] = [];
  state: string;
  counter: number;
  digit(){
    return Math.floor(Math.random() * 9 + 1)
  }
  constructor(a?: number, b?: number, c?: number, d?: number){
    this.mainNumber.push(a || this.digit())
    this.mainNumber.push(b || this.digit())
    this.mainNumber.push(c || this.digit())
    this.mainNumber.push(d || this.digit())

    this.state = 'playing'
    this.counter = 0;
  }

  guess(guess: number[]){
    let cowBull: string[] = [];
    for(let i: number = 0; i < 4; i++){
      this.mainNumber[i] === guess[i] ? cowBull.push('cow') : this.mainNumber.indexOf(guess[i]) > 0 ? cowBull.push('bull') : '';
    }
    if('cowcowcowcow' === cowBull.join('')){
      this.state = 'finished';
      console.log(`You won, the number was ${this.mainNumber.join('')}`)
    }
    return cowBull;
  }
}


class Game extends CAB {
  constructor(a?: number, b?: number, c?: number, d?: number){
    super(a, b, c, d);
  }
}

export{ CAB, Game };