'use strict';

import { Aircraft, F16, F30 } from './airCraft';



class Carrier {
  aircrafts: Aircraft[];
  ammo: number;
  hp: number;
  allDemage: number;

  constructor(allAmmo: number, startHP: number){
    this.aircrafts = [];
    this.ammo = allAmmo;
    this.hp = startHP;
    this.allDemage = 0;
  }

  addAircraft(ac: Aircraft) {
    this.aircrafts.push(ac);
  }

  orderPriority() {
    this.aircrafts.sort((aircraft1: Aircraft, aircraft2: Aircraft) => {
      if (aircraft1.priority === false && aircraft2.priority === true) {
        return 1;
      } else if (aircraft1.priority === true && aircraft2.priority === false) {
        return -1;
      } else {
        return 0;
      }
    })
    return this.aircrafts;
  }

  fill() {
    this.orderPriority();
    this.aircrafts.forEach(aircraft =>{
      let newAmmo = aircraft.refill(this.ammo);
      return this.ammo = newAmmo;
    });
  }


  calculateAllDemage() {
    this.allDemage = 0;
    this.aircrafts.forEach(value => {
      this.allDemage += value.allDem;
    });
    return this.allDemage;
  }

  fight(otherCarrier: Carrier){

  }


  getStatus() {
    if (this.ammo <= 0) {
      console.log('It\'s dead Jim :(');
    } else {
      this.calculateAllDemage();
      console.log(`HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.fill}, total damage ${this.allDemage}`);

      this.aircrafts.forEach(value => console.log(``));
    };
  }

}


let one1 = new F16();
let one2 = new F16();
let one3 = new F30();
let one4 = new F16();
one1.allDem = 10;
one2.allDem = 30;



let test = new Carrier(300, 1000);
test.addAircraft(one1);
test.addAircraft(one2);
test.addAircraft(one3);

test.fill();
console.log(test.calculateAllDemage());




