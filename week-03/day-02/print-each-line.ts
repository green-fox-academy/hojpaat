'use strict';
export { }
// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');



// function readText(InputFile: string) {
//   try {
//     let textContent: string = fs.readFileSync(InputFile, 'utf-8');
//     console.log(textContent);
//   } catch (error) {
//     console.log('Unable to read file: ' + InputFile);
//   } finally {
//     console.log('The End');
//   }
// }

function readText(InputFile: string){
  try{
    let textContent = fs.readFileSync(InputFile, 'utf-8');
    let textArray = textContent.split('\n');
    textArray.forEach(value => console.log(value));
  } catch(error) {
    console.log('Unable to read file: ' + InputFile)
  }
}

readText('text2.txt');

