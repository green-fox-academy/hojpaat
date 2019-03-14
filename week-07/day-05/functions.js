'use strict';

let arrowUp = '<i class="fas fa-arrow-alt-circle-up"></i>'
let arrowDown = '<i class="fas fa-arrow-alt-circle-down"></i>';
let scoreField = '<div class = "score"></div>';
let editIcon = '<i class="fas fa-pencil-alt"></i>'
let deletIcon = '<i class="fas fa-eraser"></i>'

const createUpvoteField = function upvoteCreation (){
  
  let newDivUpvote = document.createElement('div');
  newDivUpvote.setAttribute('class', 'upvote');

  newDivUpvote.innerHTML = arrowUp + scoreField + arrowDown;
  return newDivUpvote;
}

const createArticleDiv = () => {
  let newArticleDiv = document.createElement('div');
  newArticleDiv.setAttribute('class', 'article');
  
  let newFrontDiv = document.createElement('div');
  newFrontDiv.setAttribute('class', 'front');
  newFrontDiv.appendChild(document.createElement('h1'));
  newArticleDiv.appendChild(newFrontDiv);
  
  let newBackDiv = document.createElement('div');
  newBackDiv.setAttribute('class', 'back');
  newBackDiv.appendChild(document.createElement('p'));
  newArticleDiv.appendChild(newBackDiv);

  return newArticleDiv;
}

const createEditBar = () => {
  let editPostDiv = document.createElement('div');
  editPostDiv.setAttribute('class', 'editPost');

  let newEditA = document.createElement('a');
  newEditA.innerHTML = editIcon;
  editPostDiv.appendChild(newEditA);
  
  let newDeletA = document.createElement('a');
  newDeletA.innerHTML = deletIcon;
  editPostDiv.appendChild(newDeletA);

  return editPostDiv;

}


//append new post

const appendNewPost = () => {
  let leftDiv = document.getElementsByClassName('leftDiv')[0];
  let newPostDiv = document.createElement('div');
  newPostDiv.setAttribute('class', 'post');

  newPostDiv.appendChild(createUpvoteField());
  newPostDiv.appendChild(createArticleDiv());
  newPostDiv.appendChild(createEditBar());
  leftDiv.appendChild(newPostDiv);
  console.log('worked');
}

module.exports = {
  newPost = appendNewPost()
}

