'use strict';

export { numberIndex };

function numberIndex(inputNumber: number, inputArray: number[]): number{
  if(inputArray[0] === undefined){
    return -1;
  }else{
    let index: number = 0;

    let arrayLength: number = undefined;
    let temporaryArray: number[] = [];
    inputArray.length % 2 === 0 ? arrayLength = inputArray.length / 2 : arrayLength = (inputArray.length - 1) / 2;
  
    if(inputNumber <= inputArray[arrayLength - 1]){
      temporaryArray = inputArray.slice(0, arrayLength)
      console.log(temporaryArray, index);
    }else{
      temporaryArray = inputArray.slice(arrayLength);
      console.log(temporaryArray, index)
      return index += arrayLength;
    }
  
    if(inputArray.length === 1){
      inputArray[0] === inputNumber ? index : index = -1;
    }else{
      return index = numberIndex(inputNumber, temporaryArray);
    }
    return index
  }

}

console.log(numberIndex(23, [1, 12, 23, 44]));