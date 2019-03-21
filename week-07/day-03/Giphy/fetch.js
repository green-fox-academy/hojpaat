'use stict';

const keyword = 'kangaroo';
const url = `http://api.giphy.com/v1/gifs/search?api_key=AFEPytBGSvTRnhdqk3XZZTaCcINoFiWI&q=${keyword}`;
let giphs = document.getElementById('giphs');
let images = document.getElementsByTagName('img');

function domManupulation(myData){
  for (let i = 0; i < 16; i++) {
    let newImg = document.createElement('img');
    newImg.setAttribute('src', myData.data[i].images.fixed_height_still.url)
    giphs.appendChild(newImg);
  }
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
      images[i].setAttribute('src', myData.data[i].images.fixed_height.url)
    })
  }
}

fetch(url)
  .then(response => response.json())
  .then(domManupulation)
  .catch(error => console.error(error));
