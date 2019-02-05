'use strict';
import {Person} from './gfa-person'

class Student extends Person{
  previousOrganization: string;
  skippedDays: number = 0;

constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputOrganization: string = 'Life of School'){
  super(inputName, inputAge, inputGender);
  this.previousOrganization = inputOrganization;
}

  introduce(){
    console.log(`${super.introduceData()} who skipped ${this.skippedDays} days from the class already`);
  }

  getGoal(){
    console.log('My goal is: Be a junior software developer!');
    
  }

  skipDays(numberOfDays: number = 1){
    this.skippedDays += numberOfDays;
  }
}


export{Student};