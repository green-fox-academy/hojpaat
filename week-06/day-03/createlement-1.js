'use strict';
// Add an item that says 'The Green Fox' to the asteroid list.

// Add an item that says 'The Lamplighter' to the asteroid list.

// Add a heading saying 'I can add elements to the DOM!' to the.container.

// Add an image, any image, to the container.

var asteroids = document.querySelector('ul.asteroids');

var newLi = document.createElement('li');
newLi.innerText = 'The Green Fox';
asteroids.appendChild(newLi);

var newLi2 = document.createElement('li');
newLi2.innerText = 'The Lamplighter';
asteroids.insertBefore(newLi2, asteroids.children[0]);

var heading = document.createElement('h1');
heading.innerText = 'I can add elements to the DOM!'

var container = document.getElementsByClassName('container')[0];

container.appendChild(heading);

var imgFox = document.createElement('img')
imgFox.src = 'https://i.pinimg.com/originals/58/32/b5/5832b5b725c5fa9eaf67554e1e0f9c7e.jpg';
imgFox.setAttribute('width', '150px');
container.appendChild(imgFox);


