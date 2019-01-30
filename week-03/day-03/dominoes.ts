import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();

let smallest: number = 10;
let sIndex: number = 0;
let dominoSnake: any [] = [];
//choose the smallest number
dominoes.forEach(function(domino, index) {
  if(domino.getNumber(0) < smallest) {
    smallest = domino.getNumber(0);
    sIndex = index;
    return sIndex;
  }
})
dominoSnake.push(dominoes[sIndex].values);

//organise them in order
for(let i: number = 0; i < dominoes.length - 1; i++){
  dominoes.forEach(domino => {
    if(dominoSnake[i][1] === domino.getNumber(0)){
      dominoSnake.push(domino.values);
    }
  })
}
// console.log(dominoSnake);

print(dominoSnake);