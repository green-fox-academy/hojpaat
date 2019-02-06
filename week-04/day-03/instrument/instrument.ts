'use strict';

abstract class Instrument {
  protected name: string;
  
  constructor(){
  }
  
  play(){};
}

abstract class StringedInstrument extends Instrument{
  numberOfString: number;

  constructor(strings: number){
    super();
    this.numberOfString = strings;
  }

  sound(): void {};

  abstract play(){ 
    this.sound();
  };

}


class ElectricGuitar extends StringedInstrument{
  name: string = 'Electric Guitar';

  constructor(strings: number = 6){
    super(strings);
  }

  sound(): string {
    return 'Twaand';
  }

  play(){
    console.log(`${this.name} is a ${this.numberOfString}-stringed instrument that goes with ${this.sound()}`)
  }

}

class BassGuitar extends StringedInstrument{
  protected name = 'Bass Guitar';

  constructor(string: number = 4, v: string = 'Duum-duum-duum'){
    super(string)
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
  play(){
    console.log(`${this.name} is a ${this.numberOfString}-stringed instrument that goes with ${this.sound()}`)
  }
}


class Violin extends StringedInstrument{
  protected name = 'Violin';
  voice: string;
  constructor(string: number = 4){
    super(string);
  }

  sound(): string {
    return 'Twaand';
  }
  play(){
    console.log(`${this.name} is a ${this.numberOfString}-stringed instrument that goes with ${this.sound()}`)
  }
}



export{Instrument, StringedInstrument, ElectricGuitar, BassGuitar, Violin}