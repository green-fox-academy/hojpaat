'use strict';

let fs = require('fs');

function readFile(fileName: string): string[][]{
  let text = fs.readFileSync(fileName, 'utf-8');
  let textArray =  text.split('\r\n');
  return textArray.map(value => value.split(';'))
}

function getLotteryNumber(fileName: string): string[][]{
  let lottoNumberArray: string[][] = readFile(fileName);
  return lottoNumberArray.map(value => value.slice(-5));
}

console.log(readFile('lotteryNumbers.txt'));

