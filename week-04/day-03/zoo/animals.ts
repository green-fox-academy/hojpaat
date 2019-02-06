'use strict';

abstract class Animal {
  name: string;
  age: number;
  gender: string;
  wildness: boolean;
  hungriness: boolean;
  breedType: string;
  constructor(animalName: string) {
    this.name = animalName;
  }

  getName(): string {
    return this.name;
  };
  breed(): string {
    return this.breedType;
  };
  isHungry(): void { };
  isWild(): void { };

}


class Reptile extends Animal {
  breedType: string = 'laying eggs';
}


class Mammal extends Animal {
  breedType: string = 'pushing miniature version out';
}

class Bird extends Animal {
  breedType: string = 'laying eggs';
}


let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());