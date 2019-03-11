'use strict';

let getCandyBtn = document.querySelector('.create-candies');
let getLollypopBtn = document.querySelector('.buy-lollypops');
let candyRainBtn = document.querySelector('.candy-machine');
let candyStat = document.querySelector('.candies');
let lollypopStat = document.querySelector('.lollypops');
let speedStat = document.querySelector('.speed');
let lollypopimage = String.fromCodePoint(0x1F36D);


lollypopStat.innerText = 'Lollipops: ';
getLollypopBtn.disabled = true;

let candyNumber = 100;
let lollypopsNumber = 30;
let candyIncreasement = 0;
let candySpeed = 1;

function gameEnd(){
    clearInterval(lollypopHarvest);
    clearInterval(speedlog);
}



function lollypopButton (){
  candyNumber >= 100 ? getLollypopBtn.disabled = false : getLollypopBtn.disabled = true;
  ;
}

function candySpeedLog(){
  speedStat.innerText = candyNumber - candyIncreasement;
  candyIncreasement = candyNumber;
}
let speedlog = setInterval(() => {
  if(candyNumber > candyIncreasement){
    candySpeedLog();
  }else {
    candyIncreasement = candyNumber;
  }
}, 1000);

getCandyBtn.onclick = () => {
  candyNumber += 1;
  candyStat.innerText = candyNumber;
  lollypopButton();
  if(candyNumber > 150){
    gameEnd();
  }
}

let lollypopHarvest = undefined;
getLollypopBtn.onclick = () => {
  candyNumber -=100;
  lollypopsNumber += 1;
  lollypopStat.innerText += lollypopimage;
  lollypopButton();

  if(lollypopsNumber >= 10){
    lollypopHarvest = setInterval( () => {
      candyNumber += 1 * Math.floor(lollypopsNumber / 10) * candySpeed;
      candyStat.innerText = candyNumber;
      lollypopButton();;
    }, 1000)

  }
}


candyRainBtn.onclick = () => {
  candySpeed *= 10;
}