'use strict';


class Aircraft{
  type: string;
  maxAmmo: number;
  baseDemage: number;
  ammo: number;
  allDem: number;
  priority: boolean;


  constructor(){
    this.type = undefined;
    this.maxAmmo = 0;
    this.baseDemage = 0;
    this.ammo = 0;
    this.allDem = 0;
    this.priority = false;
  }

  fight(){
    let d = this.baseDemage * this.ammo;
    this.ammo = 0;
    return this.allDem = d;
  }

    refill(allAmmo: number){
      let diff = this.maxAmmo - this.ammo;
      this.ammo += Math.min(diff, allAmmo);
      return allAmmo - Math.min(diff, allAmmo)
    }

    getType(){
      return this.type;
    }

    getStatus(){
      return `Type ${this.type}, Ammo: ${this.ammo}, Base Demage: ${this.baseDemage}, All Demage: ${this.allDem} `
    }

    isPriority(){
      return this.priority;
    }
}

class F16 extends Aircraft{
  
  constructor(){
    super();
    this.type = 'F16';
    this.maxAmmo = 8;
    this.baseDemage = 30;
    this.priority = false;
  }

}

class F30 extends Aircraft{
  
  constructor(){
    super();
    this.type = 'F30';
    this.maxAmmo = 12;
    this.baseDemage = 50;
    this.priority = true;
  }

}




export {Aircraft, F16, F30};
