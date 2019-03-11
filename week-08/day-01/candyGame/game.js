'use strict';

let candyStat = document.querySelector('.candies');
let getCandy = document.querySelector('.create-candies');
let candyNumber = 0;
console.log(getCandy)
getCandy.onclick = () => {
  candyNumber += 1;
  candyStat.innerText = candyNumber;
}