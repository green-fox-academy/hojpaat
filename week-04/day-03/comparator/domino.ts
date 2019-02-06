'use strict';

import{ Comparable} from './comparator'

class Domino implements Comparable{
  values: number[];
  value: number;
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  getNumber(value: number = 0) {
    return this.values[value];
  }

  compareTo(other: Comparable){
    if(this.values[0] > other.values[0]){
      return 1;
    }else if(this.values[0] < other.values[0]){
      return -1;
    }else{
      if(this.value[1] > this.value[1]){
        return 1;
      }else if(this.value[1] < this.value[1]){
        return -1
      }else{
        return 0;
      }
    }
  }
  
}

export {Domino};
