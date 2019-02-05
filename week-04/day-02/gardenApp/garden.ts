'use strict';

import { watering, Plant} from './plants';

function initializeGarden(): Plant[]{
  let plants = [];
  plants.push(new Plant('flower', 'yellow'));
  plants.push(new Plant('flower', 'blue'));
  plants.push(new Plant('tree', 'purple'));
  plants.push(new Plant('tree', 'orange'));
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
    
  }


}

let secretGarden = new Garden(initializeGarden());

secretGarden.waterGarden(10);
console.log(secretGarden);


