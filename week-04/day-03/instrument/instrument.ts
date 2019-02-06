'use strict';

abstract class Instrument {
  protected name: string;
  
  constructor(){
  }
  
  sound(instrument: string, stringNumber: number, sound: string){
    console.log(`${instrument}, a ${stringNumber}-stringed intrument that goes with ${sound}`);
    
  }
}

abstract class StringedInstrument extends Instrument{
  numberOfString: number;
  voice: string;

  constructor(strings: number, v: string){
    super();
    this.numberOfString = strings;
    this.voice = v;
  }

  introduce(){
    console.log(this.numberOfString);
    
  }

  play(){
    this.sound(this.name, this.numberOfString, this.voice)
  }

}


class ElectricGuitar extends StringedInstrument{
  name: string = 'Electric Guitar';

  constructor(strings: number = 6, v: string = 'Twangg'){
    super(strings, v);

  }
}

class BassGuitar extends StringedInstrument{
  protected name = 'Bass Guitar';

  constructor(string: number = 4, v: string = 'Duum-duum-duum'){
    super(string, v)
  }
}


class Violin extends StringedInstrument{
  protected name = 'Violin';
  constructor(string: number = 4, v: string = 'Screech'){
    super(string, v)
  }
}



export{Instrument, StringedInstrument, ElectricGuitar, BassGuitar, Violin}