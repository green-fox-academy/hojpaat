'use strict';

interface Flyable {

  land(): void;
  takeOff(): void;
}


abstract class Vehicle{
  type: string;
  speed: number;
  tank: number;
}


class Helicopter extends Vehicle implements Flyable{
  land(){
    console.log('Landed')
  }
  takeOff(){
    console.log('Started fly');
    
  }
}

abstract class Animal{
  type: string;
  age: number;
  gender: string;
}

class Bird extends Animal implements Flyable{
  land(){
    console.log('Csipcsip');
  }
  takeOff(){
  console.log('Szállj, szállj sójom szárány');
  
  }
}