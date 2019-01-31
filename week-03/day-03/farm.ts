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

  constructor() {
    this.animal = []
    this.slot = 30;
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

let myFarm = new Farm();
console.log(myFarm);
let animal1 = new Animal('koala');
let animal2 = new Animal('horse');
let animal3 = new Animal('ladybug');
let animal4 = new Animal('whale');
let animal5 = new Animal('raven');
animal5.hungerValue = 10;
animal2.hungerValue = 30;
animal3.hungerValue = 13;
myFarm.add(animal1);
myFarm.add(animal2);
myFarm.add(animal3);
myFarm.add(animal4);
myFarm.add(animal5);


myFarm.breed('horse');
myFarm.breed('sheep');
myFarm.breed('turtle');
console.log(myFarm);
myFarm.slaugther();
console.log(myFarm);
