'use strict';

function countLetter(inputText: string){
  inputText = inputText.toLowerCase();
  inputText = inputText.replace(/\./g, '');
  let textArray: string[] = inputText.replace(/ /g, '').split('');
  let letterArray: string[] = [];
  textArray.forEach((letter, index) => {
    if(textArray.indexOf(letter) === index){
      letterArray.push(letter);
    }return letterArray;
  })
console.log(textArray);
  console.log(letterArray);
  
  
  
}

countLetter('aaaaan.nnnabanaba')
