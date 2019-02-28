'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

// If the first p has an 'apple' class, replace cat's content with 'dog'

// Make apple red by adding a.red class

//   Make balloon less balloon - like(change its shape)

var paragraphs = document.getElementsByTagName('p');
var apple = document.querySelectorAll('.apple');
var cat = document.querySelectorAll('.cat');

if(paragraphs[3].classList.contains('dolphin') === true){
  apple.forEach(element => {
    element.innerText = 'pear'
  })
};

if(paragraphs[0].classList.contains('apple') === true){
cat.forEach(element => element.innerText = 'dog')
};

apple.forEach(element => element.classList.add('red'));

var balloon = document.querySelectorAll('.balloon');

balloon.forEach(element => element.setAttribute('style', 'border-radius: 20%'));