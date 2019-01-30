'use strict';
import { DiceSet } from './DiceSet';

let myDiceSet = new DiceSet();
console.log(myDiceSet.roll());

for(let i: number = 0; i < myDiceSet.dice.length; i++){
  if(myDiceSet.dice[i] === 6){ 
    continue 
  }else {
    while(myDiceSet.dice[i] !== 6){
      myDiceSet.reroll(i);
    }
  }
  console.log(myDiceSet.dice);
}
