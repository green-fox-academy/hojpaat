'use strict';

console.log('started');


document.addEventListener('DOMContentLoaded', () => {
  let navBar = document.getElementsByTagName('nav')[0];
  navBar.addEventListener('click', (e) => {
    console.log(e.target);
    
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