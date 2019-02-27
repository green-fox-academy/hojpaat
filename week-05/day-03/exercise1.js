'use strict';

function logArray(inputArray){
for (let i = 0; i < inputArray.length; i++) {
  console.log(inputArray[i]);
  ;
};
}

var king = document.getElementById('b325');
console.log(king);
var businessLamp = document.getElementsByClassName('big');
console.log('businessLamp');

logArray(businessLamp);

var asteroids = document.getElementsByClassName('asteroid');
var conceitedKing = [asteroids[0], asteroids[1]];

console.log('conceitedKing');

for (let i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].innerText);
  ;
};

var noBusiness = [];

for (var i = 0; i < asteroids.length; i++) {
  asteroids[i].innerText !== 'The Businessman' ?
    noBusiness.push(asteroids[i]) : '';
}

console.log('noBusiness');
logArray(noBusiness);

