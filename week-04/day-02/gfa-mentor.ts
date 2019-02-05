'use strict';

import{Person} from './gfa-person'


class Mentor extends Person{
  level: string;
  
   constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputLevel: string = 'intermediate'){
     super(inputName, inputAge, inputGender)
     this.level = inputLevel;
   }
 
   getGoal(){
     console.log('My goal is: Educate brilliant junior software developers.');
     
   }
 
   introduce(){
     console.log(`${super.introduceData()} ${this.level} mentor`);
     
   }
 
 }
 

 export{Mentor};