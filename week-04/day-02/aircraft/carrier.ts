'use strict';

import { Aircraft, F16, F30} from './airCraft';

class Carrier{
  aircrafts: Aircraft[];
  ammo: number;
  hp: number;

  constructor(a: number, h: number){
    this.aircrafts = [];
    this.ammo = a;
    this.hp = h;
  }

  addAircraft(ac: Aircraft){
    this.aircrafts.push(ac);
  }

}