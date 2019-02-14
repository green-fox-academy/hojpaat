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

function mostFrequent(freqencies: object){
  let searchedChar: string[] = [];
  let mostFrequent: string = undefined;
  let biggestFrequency = 0;
  let options: string[] = [];
  for(let i: number = 1; i < 91; i++){
    options.push(i.toString());
    
    if (freqencies[options[i - 1]] > biggestFrequency){
      biggestFrequency = freqencies[options[i - 1]];
      mostFrequent = options[i - 1];
  }
}
return searchedChar.push(mostFrequent);
}

let lottoNumberArray = getLotteryNumber(readFile('lotteryNumbers.txt'));

let frequency: object = countNumber(lottoNumberArray);

mostFrequent(frequency);
