'use strict';



const watering = (state) => ({
  watering: (w: number)=> {
    state.waterAmount += w * state.absorb;
  }
});




class Plant {
  type: string;
  color: string;
  waterAmount: number = 0;
  needWater: boolean = false;
  absorb: number;

  constructor(t: string, c: string){
    this.type = t,
    this.color = c
    t === 'flower' ? this.absorb = 0.75 : this.absorb = 0.4;
  }

  isNeedWatering(){
    if(this.type === 'flower'){
      this.waterAmount < 5 ? this.needWater = true : this.needWater = false;
    } else {
      this.waterAmount < 10 ? this.needWater = true : this.needWater = false;
    }
    return this.needWater;
  }


}

export { watering, Plant};