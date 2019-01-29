'use strict';
export{}
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

function lineCounter (inputText: string) {
  let lineNumber: number = 0;
  try {
    let fileContent = fs.readFileSync(inputText, 'utf-8');
    let contentArray = fileContent.split('\r\n');
    lineNumber = contentArray.length;
  }catch (error){
    lineNumber = 0;
  }
  console.log(lineNumber);

}

lineCounter('text2.txt');