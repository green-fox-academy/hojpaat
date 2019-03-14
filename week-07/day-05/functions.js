'use strict';

const creatPost = function postCreator() {
  let newDivFront = document.createElement('div');
  newDivFront.setAttribute('class', 'front');

  let newH1 = document.createElement('h1');

  newDivFront.appendChild(newH1);

  let newDivBack = document.createElement('div');
  newDivBack.setAttribute('class', 'back');

}