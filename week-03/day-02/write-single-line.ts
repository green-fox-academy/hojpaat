'use strict';
export{}
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let fs = require('fs');

function writeToFile (fileName: string, inputText: string) {
  try {
    fs.readFileSync(fileName, 'utf-8')
    fs.writeFileSync(fileName, inputText);
  }catch {
    console.log('Unable to write file')
  }
}

writeToFile('my-file.txt', 'Judit');