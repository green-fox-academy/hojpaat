'use strict';

const url = 'http://api.icndb.com/jokes/random';
const button = document.getElementById('jokeBtn');
const div = document.getElementById('text');

function addText(data){
  div.innerText = data.value.joke;
  // console.log(data);
}

// button.addEventListener('click', () => {
//   fetch(url)
//   .then(response => response.json())
//   .then(console.log)
// })

button.onclick = () => {
  fetch(url)
  .then(response => response.json())
  .then(addText)
  .catch(error)
}