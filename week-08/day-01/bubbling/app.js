'use strict';

console.log('started');


document.addEventListener('DOMContentLoaded', () => {
  let navBar = document.getElementsByTagName('nav')[0];
  let img = document.querySelector('.img-inspector');
  let imgSize = 200;
  let imgPosition = {
    x: 0,
    y: 0
  }
  console.log(imgSize);
  
  navBar.addEventListener('click', (e) => {
    let dataAction = e.target.dataset.action;
    let dataDirection = e.target.dataset.direction;
    if(dataAction === 'zoom'){
      dataDirection === 'in' && imgSize > 20 ? imgSize += 20 : imgSize -= 20;
      img.setAttribute('style', `background-size: ${imgSize}%`)
    }else if(dataAction = 'move'){
      
      if(dataDirection === 'up'){
        imgPosition.y += 10;
      }else if(dataDirection === 'down'){
        imgPosition.y -= 10;
      }else if(dataDirection === 'right'){
        imgPosition.x += 10;
      }else if(dataDirection === 'left'){
        imgPosition.x -= 10;
      }
      
      img.setAttribute('style', `background-position: ${imgPosition.x}px ${imgPosition.y}px;`);
    }
    
  })
})