'use strict';

let getCandyBtn = document.querySelector('.create-candies');
let getLollypopBtn = document.querySelector('.buy-lollypops');
let candyRainBtn = document.querySelector('.candy-machine');
let candyStat = document.querySelector('.candies');
let lollypopStat = document.querySelector('.lollypops');
let speedStat = document.querySelector('.speed');

lollypopStat.innerText = 'Lollipops: ';
let lollypopimage = String.fromCodePoint(0x1F36D);

getLollypopBtn.disabled = true;
candyRainBtn.disabled = true;

// lollypops.setAttribute('style', 'display: none');
let candyNumber = 0;
let lollypopsNumber = 10;


function lollypopButton (){
  candyNumber >= 10 ? getLollypopBtn.disabled = false : getLollypopBtn.disabled = true;
  ;
}

getCandyBtn.onclick = () => {
  candyNumber += 1;
  candyStat.innerText = candyNumber;
  lollypopButton();
}

getLollypopBtn.onclick = () => {
  candyNumber -=10;
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
