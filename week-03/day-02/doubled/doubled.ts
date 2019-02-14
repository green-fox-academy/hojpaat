'use strict';

let fs = require('fs');
function readFile(fileName): string[]{
  let textArray = fs.readFileSync(fileName, 'utf-8').replace(/\r\n/g, '$$').split('');
  return textArray;  
}



function removeDuplication(textArray: string[]): string[]{
  let notDoubleTextArray: string[] = [];
  for(let i: number = 1; i < textArray.length; i += 2){
    if(textArray[i] === '\r\n'){
      notDoubleTextArray.push()
    }
    notDoubleTextArray.push(textArray[i]);
  }
  return notDoubleTextArray;
}

function arrayToText(textArray: string[], fileName: string){
  let text = textArray.join('');
  text.replace( '$', '!!!')
  fs.writeFileSync(fileName, text);
}


// function doubled(fileName: string){
//   let inputTextArray = readFile('text.txt');
//   inputTextArray = inputTextArray.map(element => removeDublication(element));
//   let textArray = inputTextArray.map(value => value.join(''));
//   arrayToText(textArray, 'text.txt');
// }


let contentArray = readFile('text.txt');
// console.log(contentArray);
contentArray = removeDuplication(contentArray);
arrayToText(contentArray, 'text.txt');


// doubled('text.txt')


// arrayToText(inputTextArray, 'text.txt')
