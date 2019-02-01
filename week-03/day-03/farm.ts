'use strict';
import { Animal } from './animal'
// Farm
// - Reuse your `Animal` class
// - Create a `Farm` class
//   - it has list of Animals
//   - it has slots which defines the number of free places for animals
//   - breed() -> creates a new animal if there's place for it
//   - slaughter() -> removes the least hungry animal

class Farm {
  animal: Animal[];
  slot: number;

  constructor(initialize: Animal[] = []) {
    this.animal = initialize;
    this.slot = 30 - initialize.length;
  }

  add(farmAnimal: Animal) {
    this.animal.push(farmAnimal);
    this.slot -= 1;
  }

  breed(v: string){  
    let animalV = new Animal(v)
    this.add(animalV);
  }

  slaugther(){
    let sIndex: number = 0;
    this.animal.forEach((value, index) => {
      value.hungerValue < this.animal[sIndex].hungerValue ? sIndex = index : sIndex = sIndex;
    })
    this.animal.splice(sIndex, 1);
    this.slot += 1;
  }

}



function initializeFarm(): Animal[]{
  let animals = [];
  animals.push(new Animal('koala', 10));
  animals.push(new Animal('ladybug', 30));
  animals.push(new Animal('whale', 50));
  animals.push(new Animal('cat'));
  animals.push(new Animal('dog',12));
  animals.push(new Animal('llama',80));
  animals.push(new Animal('fox',40));
  return animals;
}

let myFarm = new Farm(initializeFarm());

myFarm.breed('horse');
myFarm.breed('sheep');
myFarm.breed('turtle');
console.log(myFarm);
myFarm.slaugther();
console.log(myFarm);
