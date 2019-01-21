'use stict';
export{}

/*function greetFoxAlert() {
  alert('Hello Green Fox!');
}

greetFoxAlert();*/

function greetFoxLog() {
  console.log('Hello Green Fox!');
}

greetFoxLog();


//function arguments
function greetByName(...name: string[]) {
  console.log(arguments);
  console.log('Well hi there,', name);
}

greetByName('Tojas');
greetByName('Barbi', 'CEO');

function greet(greet: string = 'Hi', name: string = 'bro') {
  console.log(greet, name + "!");
}

greet('Hey');
greet('Hello', 'Tojas');

console.log("--------------------");

function makeGreen(name: string): string {
  let newName = 'Green ' + name;
  return newName;
}

let name = makeGreen('Judit');
greet('Whazzup', name);