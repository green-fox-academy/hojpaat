'use strict';
import {Sharpie} from './sharpie';
// Sharpie Set

//  -  Reuse your `Sharpie` class
//  -  Create `SharpieSet` class
//      -  it contains a list of Sharpie
//      -  `countUsable()` -> sharpie is usable if it has ink in it
//      -  `removeTrash()` -> removes all unusable sharpies

class SharpieSet {
  set: Sharpie[];

  constructor() {
    this.set = [];
  }

  add(oneSharpie: Sharpie) {
    this.set.push(oneSharpie);
  }

  countUsable(){
    let useable: number = 0;
    this.set.forEach(pen => {
      if (pen.inkAmount > 0){
        useable += 1;
      }
    })
    console.log(useable);
  }

  removeTrash(){
    for(let i: number = 0; i < this.set.length;
      i++){
      if(this.set[i].inkAmount <= 0){
        this.set.splice(i, 1);
        i = i - 1;
      }
    }
    console.log(this.set);
  }
}


let sharpie1 = new Sharpie('blue', 2);
let sharpie2 = new Sharpie('pink', 1);
let sharpie3 = new Sharpie('red', 6);
let sharpie4 = new Sharpie('red', 6);
sharpie2.inkAmount = 0;
sharpie3.inkAmount = 0;

let mySet = new SharpieSet();

mySet.add(sharpie1);
mySet.add(sharpie2);
mySet.add(sharpie1);
mySet.add(sharpie2);
mySet.add(sharpie4);

mySet.countUsable();
mySet.removeTrash();
