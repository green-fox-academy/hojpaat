'use strict';

const url = 'http://api.icndb.com/jokes/random';
const button = document.getElementById('jokeBtn');
const div = document.getElementById('text');

function addText(data ){
  div.innerText = data.value.joke;
}

button.onclick = () => {
  fetch(url)
  .then(response => response.json())
  .then(addText)
  .catch(error)
}