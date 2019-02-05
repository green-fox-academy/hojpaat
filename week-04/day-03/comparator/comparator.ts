'use strict';

interface Comparable {
  value: number;
  compareTo(other: Comparable): number;
  
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
  
}

class Value implements Comparable {
  value: number;
  compareTo(other: Comparable): number {
    return this.value - other.value;
  }
}

let x = new Value;
let y = new Value;
x.value = 6;
y.value = 9;

console.log(x.compareTo(y));
