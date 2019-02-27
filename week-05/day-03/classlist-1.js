'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

// If the first p has an 'apple' class, replace cat's content with 'dog'

// Make apple red by adding a.red class

//   Make balloon less balloon - like(change its shape)

var paragraphs = document.getElementsByTagName('p');
var apple = document.querySelectorAll('.apple');

if(paragraphs[3].classList.contains('dolphin') === true){
  apple.forEach(element => {
    element.innerText = 'pear'
  })
}