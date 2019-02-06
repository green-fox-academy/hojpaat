'use strict';
export{ Comparable }
interface Comparable {
  value: number;
  values: number[];
  compareTo(other: Comparable): number;
  
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
  
}

class Value implements Comparable {
  value: number;
  constructor(value: number){
    this.value = value;
  }
  compareTo(other: Comparable): number {
    if(this.value === other.value){
      return 0;
    }else if(this.value > other.value){
      return 1;
    }else{
      return -1;
    }
  }
}

let test = new Value(12);
let test2 = new Value(3);
console.log(test.compareTo(test2));


class Domino implements Comparable {
  values: number[];
  value: number;
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  getNumber(value: number = 0) {
    return this.values[value];
  }

  compareTo(other: Comparable){
    for(let i: 0; i < this.values.length; i++){
      this.values[i] = this.value;
      if (this.value > other.value){
        return 1;
      }else if(this.value < other.value){
        return -1;
      }else{
        return 0;
      }
    }
  }
}
