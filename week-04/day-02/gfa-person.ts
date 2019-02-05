'use strict';

class Person {
  name: string;
  age: number;
  gender: string;
  introdaction: string;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female'){
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
  }

  introduceData(){
    return (`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender}`);
  }

  introduce(){
    console.log(`${this.introduceData()}.`);
  }

  getGoal() {
  console.log('My goal is: Live for the moment!');
  }

}


export{Person};