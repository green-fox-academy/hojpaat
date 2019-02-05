'use strict';


class Aircraft{
  type: string;
  maxAmmo: number;
  baseDemage: number;
  ammo: number;


  constructor(){
    this.type = undefined;
    this.maxAmmo = 0;
    this.baseDemage = 0;
    this.ammo = 0;
  }

  fight(){
    let d = this.baseDemage * this.ammo;
    this.ammo = 0;
    return d;
  }


}

class F16 extends Aircraft{
  
  constructor(){
    super();
    this.type = 'F16';
    this.maxAmmo = 8;
    this.baseDemage = 30;
  }

}

class F30 extends Aircraft{
  
  constructor(){
    super();
    this.type = 'F30';
    this.maxAmmo = 12;
    this.baseDemage = 50;
  }

}




let a1 = new F16();

