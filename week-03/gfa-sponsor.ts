'use strict';

import{Person} from './gfa-person'

class Sponsor extends Person{
  company: string;
  hiredStudents: number = 0;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputComapny: string = 'Google'){
    super(inputName, inputAge, inputGender)
    this.company = inputComapny;
  }

  introduce(){
    console.log(`${super.introduceData()} and hired ${this.hiredStudents} students so far.`)
  }

  getGoal(){
    console.log(`My goal is: Hire brilliant junior software developers.`);
    
  }

  hire(){
    this.hiredStudents++;
  }
}


export{Sponsor};