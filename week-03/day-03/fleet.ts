import { Thing } from "./thing";

class Fleet {
  public things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);
  }

  print() {
    for (let i: number = 0; i < this.things.length; i++){
      if (this.things[i].completed) {
        console.log(`${i+1}. [x] ${this.things[i].name}`)
      }else {
        console.log(`${i+1}. [ ] ${this.things[i].name}`)
      }
    }
  }

}


export { Fleet };