'use strict';

import { Aircraft, F16, F30} from './airCraft';

class Carrier{
  aircrafts: Aircraft[];
  ammo: number;
  hp: number;
  allDemage: number;

  constructor(a: number, h: number){
    this.aircrafts = [];
    this.ammo = a;
    this.hp = h;
    this.allDemage = 0;
  }

  addAircraft(ac: Aircraft){
    this.aircrafts.push(ac);
  }

  neededAmmo(){
    let ammoPerAircraft = this.aircrafts.map(element => element.refill(0));
    return ammoPerAircraft.reduce((accV: number, currentV: number) => accV += currentV, this.ammo);
  }

  // fillAllAircraft(){
  //   let usedAmmo: number = 0;
  //   usedAmmo = this.aircrafts.forEach(value => value.refill(usedAmmo));
  // }

  fill(){
    if(this.neededAmmo() > this.ammo){
      this.aircrafts.sort().reverse()
    }
    
  }

  calculateAllDemage(){
    this.allDemage = 0;
    this.aircrafts.forEach(value => {
      this.allDemage += value.allDem;
    });
    return this.allDemage;
  }

  getStatus(){
    if(this.ammo <= 0){
      console.log('It\'s dead Jim :(');
    }else{
      this.calculateAllDemage();
      console.log(`HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.fill}, total damage ${this.allDemage}`);
      
      this.aircrafts.forEach(value => console.log(``));
    }
    ;
    
  }

}


let one1 = new F16();
let one2 = new F16();
let one3 = new F16();
let one4 = new F16();
one1.allDem = 10;
one2.allDem = 30;



let test = new Carrier(300, 50);
test.addAircraft(one1);
test.addAircraft(one2);
test.addAircraft(one3);
test.addAircraft(one4);

console.log(test.calculateAllDemage());
console.log(test.calculateAllDemage());




