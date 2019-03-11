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
// document.addEventListener('DOMContentLoad', () => {
//   console.log('started');
  
//   })
// })

// <!-- You can work in the html or in a separate js file. Like:

//     <script>
//       Here is an image inspector, but the buttons are not implemented yet, that will
//       be your task!
//        - the nav buttons (up, down, left, right) move the background by 10px
//        - the zoom buttons increase/decrease the image by 20%
//        - attach only two event listeners to the nav element
//          - one for navigation
//          - one for zooming
//     </script>

//     OR

//     <script src="bubbling.js"></script> -->
//   </body>