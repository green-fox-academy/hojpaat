'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button');

  button.addEventListener('click', () => {
    console.log(Date());
    button.setAttribute('disabled', 'true');
  })
})


//   Create an event listener which logs the current timestamp to the console once the button is clicked.
//   When the button is clicked for the second or any other times no event listener should be called.
//   Try to solve this two different ways.
//   hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
// </script>

// OR

// <script src="one-time-clicker.js"></script> -->