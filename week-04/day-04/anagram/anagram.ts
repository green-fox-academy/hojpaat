'use strict';

function anagram(string1: string, string2: string): boolean{
  string1 = string1.replace(/\./g, '');
  string1 = string1.replace(/ /g, '');
  string2 = string2.replace(/\./g, '');
  string2 = string2.replace(/ /g, '');
  let string1Array: string [] = string1.replace(/\r\n/g, '').split('');

  let string2Array: string [] = string2.replace(/\r\n/g, '').split('');
  let truthy: boolean = true;
  string1Array.forEach(string => {
    if (string2Array.indexOf(string) < 0){
      truthy = false;
    }
  })
  return truthy;
  
}

export {anagram}
