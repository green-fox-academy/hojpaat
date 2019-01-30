//  Teacher Student

//  -  Create `Student` and `Teacher` classes
//  -  `Student`
//      -  `learn()`
//      -  `question(teacher)` -> calls the teachers answer method
//  -  `Teacher`
//      -  `teach(student)` -> calls the students learn method
//      -  `answer()`

class Student {
  name: string;
  IQ: number;
  constructor(InputName: string){
    this.name = InputName;
    this.IQ = 100;
  }

  learn() {
    this.IQ += 10;
  }

  question(inputTeacher: Teacher){
    inputTeacher.answer()
  }
}

class Teacher {
  name: string;
  tiredness: number;
  constructor (inputName: string){
    this.name = inputName;
    this.tiredness = 0;
  }

  teach(inputStudent: Student) {
    inputStudent.learn();
  }


  answer(){
    this.tiredness += 1;
  }
}

let Anna = new Student ('Anna');
let MrsT = new Teacher ('MrsT');

MrsT.teach(Anna);
console.log(Anna);