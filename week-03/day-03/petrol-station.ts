// Petrol Station

//  -  Create a `Station` and a `Car` classes
//  -  `Station`
//      -  gasAmount
//      -  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//  -  `Car`
//      -  gasAmount
//      -  capacity
//      -  create constructor for `Car` where:
//           -  initialize gasAmount -> 0
//           -  initialize capacity -> 100

class Station {
  gasAmount: number;

  constructor(){
    this.gasAmount = 100000;
  }

  refill(inputCar: Car){
    this.gasAmount -= inputCar.capacity - inputCar.gasAmount;
    inputCar.gasAmount = 100;
  }

}

class Car {
  gasAmount: number;
  capacity: number;

  constructor(){
    this.gasAmount = 0;
    this.capacity = 100;
  }
}

let gasStation = new Station();
let myCar = new Car();

gasStation.refill(myCar);
console.log(gasStation);
console.log(myCar);