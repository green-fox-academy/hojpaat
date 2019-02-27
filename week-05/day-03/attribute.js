// Write the image's url to the console.

// Replace the image with a picture of your favorite animal.

// Make the link point to the Green Fox Academy website.

// Disable the second button.
// Replace its text with 'Don't click me!'.


var imgUrl = document.getElementsByTagName('img')[0];
imgUrl.src = 'https://ih1.redbubble.net/image.208490752.9756/pp,550x550.u2.jpg';
imgUrl.setAttribute('width', '100px')

var aUrl =document.querySelector('a');
aUrl.setAttribute('target', '_blank')
aUrl.href = 'https://www.greenfoxacademy.com/';

var disableButton = document.querySelector('.this-one');
disableButton.setAttribute('disabled', true);
disableButton.innerText = 'Don\'t click me!';
console.log(disableButton);

