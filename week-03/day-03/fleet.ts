import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
}

export { Fleet };

let test = new Thing('test');
let fleetTest = new Fleet();
// test.add(test);
console.log(test);
console.log(fleetTest);
