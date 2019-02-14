'use strict';

let fs = require('fs');
function readFile(fileName): string[]{
  let textArray = fs.readFileSync(fileName, 'utf-8').replace(/[\r\n]/g, '$$').split('');
  return textArray;  
}



function removeDuplication(textArray: string[]): string[]{
  let notDoubleTextArray: string[] = [];
  for(let i: number = 1; i < textArray.length; i += 2){
    notDoubleTextArray.push(textArray[i]);
  }
  return notDoubleTextArray;
}



function arrayToText(textArray: string[], fileName: string){
  let text = textArray.join('');
  text = text.replace( /\$/g, '\r\n')
  fs.writeFileSync(fileName, text);
}


let contentArray = readFile('text.txt');
contentArray = removeDuplication(contentArray);
arrayToText(contentArray, 'text.txt');

