'use strict';

export function countLetter(inputText: string){
  inputText = inputText.toLowerCase();
  inputText = inputText.replace(/\./g, '');
  let textArray: string[] = inputText.replace(/ /g, '').split('');
  
  let dictionary: object = {}
  textArray.forEach(letter => {
    if(dictionary[letter] === undefined){
      dictionary[letter] = 1;
    }else {
    dictionary[letter]++}
    return dictionary;
  });
  return dictionary;
}

