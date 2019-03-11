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
candyRainBtn.disabled = true;

// lollypops.setAttribute('style', 'display: none');
let candyNumber = 0;
let lollypopsNumber = 0;
let candyIncreasement = 0;
let candySpeed

function lollypopButton (){
  candyNumber >= 100 ? getLollypopBtn.disabled = false : getLollypopBtn.disabled = true;
  ;
}

function candySpeedLog(){
  candySpeed = candyNumber - candyIncreasement
  speedStat.innerText = candySpeed;
  candyIncreasement = candyNumber;
}

setInterval(() => {
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
}

getLollypopBtn.onclick = () => {
  candyNumber -=100;
  lollypopsNumber += 1;
  lollypopStat.innerText += lollypopimage;
  lollypopButton();
  // lollypopStat.textContent = lollypopimage;
  if(lollypopsNumber >= 10){
    setInterval( () => {
      candyNumber += 1 * Math.floor(lollypopsNumber / 10);
      candyStat.innerText = candyNumber;
      lollypopButton();;
    }, 1000)

  }
}
