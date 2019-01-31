'use strict';

const fs = require('fs');
let textArray: string [];
let gameArray: string[][];
let gameResult: boolean = false;
let indexWinner: number = undefined;

function textRead (inputeFile: string){
  let textContent = fs.readFileSync(inputeFile, 'utf-8');
  textArray = textContent.split('\r\n');
  gameArray = textArray.map(value => value.split(''));
  console.log(gameArray);
}

textRead('draw.txt');

function winnerColumn (){
  for(let i: number = 0; i < gameArray.length; i++){
    if(gameArray[0][i] !== gameArray[1][i]){
      continue;
    }else if(gameArray[1][i] === gameArray[2][i]){
      indexWinner = i;
      return gameResult = true;
    }
}
}


function winnerRow(){
  for(let i: number = 0; i < gameArray.length; i++){
    if(gameArray[i][0] !== gameArray[i][1]){
      continue;
    }else if(gameArray[i][1] === gameArray[i][2]){
      indexWinner = i;
      return gameResult = true;
    }
  }
}

function winnerDiagonal(){
  if(gameArray[1][1] === gameArray[2][2]){
    if(gameArray[1][1] === gameArray[0][0]){
      return gameResult = true;
    }else if(gameArray[1][1] === gameArray[2][0]){
      if(gameArray[1][1] === gameArray[0][1]){
        return gameResult = true;
      }
    }
  }
}


function winnerIs(){
  winnerColumn();
  if(gameResult === true){
    console.log(`The winner is: ${gameArray[0][indexWinner]}`);
  }else{
    winnerRow();
  }
  if(gameResult === true){
    console.log(`The winner is: ${gameArray[indexWinner][0]}`);
  }else {
    winnerDiagonal();
  }
  if(gameResult === true){
    console.log(`The winner is: ${gameArray[1][1]}`)
  }else {
    console.log('It is a draw');
    
  }
}

winnerIs();
