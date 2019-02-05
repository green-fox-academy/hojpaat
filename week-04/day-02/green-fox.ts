'use stric';

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female'){
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender}.`);
  }

  getGoal(){
    console.log('My goal is: Live for the moment!');
  }
}


class Student{
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skipedDays: number = 0;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputPreviousOrganisation: string = 'The school of life'){
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
    this.previousOrganization = inputPreviousOrganisation;
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} from ${this.previousOrganization}, who skipped ${this.skipedDays} days already.`);
  }

  getGoal(){
    console.log('Be a junior software developer.');
  }


  skipDays(numberOfDays: number){
    this.skipedDays += numberOfDays;
  }
}


class Mentor{
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputLevel: string = 'intermediate'){
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
    this.level = inputLevel;
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender}${this.level} mentor.`);
  }

  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }
}


class Sponsor{
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number = 0;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputCompany: string = 'Google'){
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
    this.company = inputCompany;
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} who represents${this.company} and hired ${this.hiredStudents} strudents so far.`);
  }


  getGoal(){
    console.log('Hire brilliant jonior software developers');
  }

hire(){
  this.hiredStudents++;
}

}




let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student()
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let sponsor = new Sponsor();
people.push(sponsor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for(let i:number = 0; i < 6; i++) {
  elon.hire()
}

for(let i: number = 0; i < 4; i++){
  sponsor.hire();
}

for(let person of people){
  person.introduce();
  person.getGoal();
}