'use strict';

import { Thing } from "../../week-03/day-03/thing";

interface Printable{
  printAllFields(): void;
}

class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  getNumber(value: number = 0) {
    return this.values[value];
  }
  printAllFields(){
    this.values.forEach(value => console.log(value));
      
    }
  }

export {Domino};

let domino1 = new Domino(2, 3);
domino1.printAllFields();

class Fleet implements Printable {
  public things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);
  }

  
  printAllFields() {
    for (let i: number = 0; i < this.things.length; i++){
      if (this.things[i].completed) {
        console.log(`${i+1}. [x] ${this.things[i].name}`)
      }else {
        console.log(`${i+1}. [ ] ${this.things[i].name}`)
      }
    }
  }

}

let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstacles');
let thing3 = new Thing('Stand up');
let thing4 = new Thing('Eat Lunch');

thing3.complete();
thing4.complete();

let fleet = new Fleet();
fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);


fleet.printAllFields();