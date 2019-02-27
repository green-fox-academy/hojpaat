'use strict';
// Add an item that says 'The Green Fox' to the asteroid list.

// Add an item that says 'The Lamplighter' to the asteroid list.

// Add a heading saying 'I can add elements to the DOM!' to the.container.

// Add an image, any image, to the container.

var asteroids = document.querySelector('ul.asteroids');

var newLi = document.createElement('li')
newLi.innerText = 'Green Fox';
asteroids.appendChild(newLi);
console.log(asteroids);
