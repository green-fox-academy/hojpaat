'use strict';

export { numberIndex };

function numberIndex(inputNumber: number, inputArray: number[]): number{
  let index: number = 0;
  let arrayLength: number = null;
  let temporaryArray: number[] = [];
  inputArray.length % 2 === 0 ? arrayLength = inputArray.length / 2 : arrayLength = (inputArray.length + 1) / 2;

  if(inputNumber >= inputArray[arrayLength]){
    temporaryArray = inputArray.slice(0, arrayLength)
  }else{
    temporaryArray = inputArray.slice(arrayLength);
    index += arrayLength;
  }

  

  return index
}