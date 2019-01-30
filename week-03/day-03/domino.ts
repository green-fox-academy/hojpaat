class Domino {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  getNumber(value: number = 0) {
    return this.values[value];
  }

}

export {Domino};
