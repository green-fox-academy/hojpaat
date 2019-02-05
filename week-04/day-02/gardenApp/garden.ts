'use strict';

import { Plant, Flower, Tree} from './plants';

function initializeGarden(): Plant[]{
  let plants = [];
  plants.push(new Flower('yellow'));
  plants.push(new Flower('blue'));
  plants.push(new Tree('purple'));
  plants.push(new Tree('orange'));
  return plants;
}

class Garden {
  plants: any[] = [];

  constructor(initialize: Plant[] = []){
    this.plants = initialize;
  }

  addPlant(p: Plant){
    return this.plants.push(p);
  }


  waterGarden(w: number){
    this.plants.forEach((plant: Plant) => plant.isNeedWatering());
    let numberNeedWater: number = 0;

    this.plants.forEach(plant => {
      plant.needWater === true ? numberNeedWater++ : numberNeedWater += 0;
      return numberNeedWater;
    })
    console.log(`Watering with ${w}`)
    w = w / numberNeedWater;
    
    this.plants.forEach(plant =>{
      if(plant.needWater !== true){
        console.log(`Plant ${plant.color} ${plant.type} doesn't need water`)
      }else {
        console.log(`Plant ${plant.color} ${plant.type} needs water`)
        plant.watering(w);
        
      }
      })

  }


}

let secretGarden = new Garden(initializeGarden());
secretGarden.waterGarden(0);
secretGarden.waterGarden(40);
secretGarden.waterGarden(70);



