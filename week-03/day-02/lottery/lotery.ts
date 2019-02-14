'use strict';

let fs = require('fs');

function readFile(fileName: string): string[][]{
  let text = fs.readFileSync(fileName, 'utf-8');
  let textArray =  text.split('\r\n');
  return textArray.map(value => value.split(';'))
}


function getLotteryNumber(data: string[][]): string[][]{
  return data.map(value => value.slice(-5));
}

function countNumber(data: string[][]): any{
  let lottoNumberFrequency: object = {}
  data.forEach(oneEvent => {
    oneEvent.forEach(lottoNumber => {
    if(typeof lottoNumberFrequency[lottoNumber] === 'undefined'){
      lottoNumberFrequency[lottoNumber] = 0;
    }
    lottoNumberFrequency[lottoNumber]++;
  });
})
return lottoNumberFrequency;
}

let lottoNumberArray = getLotteryNumber(readFile('lotteryNumbers.txt'));

console.log(countNumber(lottoNumberArray));
