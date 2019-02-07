'use strict';

function anagram(string1: string, string2: string): boolean{
  
  let string1Array: string [] = string1.replace(' ', '').split('');
  let string2Array: string [] = string2.replace(' ', '').split('');
  let truthy: boolean = true;
  string1Array.forEach(string => {
    if (string2Array.indexOf(string) < 0){
      truthy = false;
    }
  })
  return truthy;
  
}


console.log(anagram('t est', 'est t'));
