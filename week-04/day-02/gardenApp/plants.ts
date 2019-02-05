'use strict';


class Plant {
  type: string;
  color: string;
  waterAmount: number = 0;
  needWater: boolean = false;
  absorb: number;

  constructor(c: string){
    this.color = c
    
  }

  isNeedWatering(){
    if(this.type === 'flower'){
      this.waterAmount < 5 ? this.needWater = true : this.needWater = false;
    } else {
      this.waterAmount < 10 ? this.needWater = true : this.needWater = false;
    }
    return this.needWater;
  }

  watering(w: number){
    this.waterAmount += w * this.absorb;
  }


}


class Flower extends Plant{
  type:string = 'flower';
  absorb: number = 0.75;
  


}

class Tree extends Plant{
  type:string = 'tree';
  absorb: number = 0.4;
}
export { Plant, Flower, Tree};


