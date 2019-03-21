'use strict';

const giphyEndpoint = 'http://api.giphy.com/v1/gifs/search?q='
const searchedExpression = 'hug'
const myKey = '&api_key=AFEPytBGSvTRnhdqk3XZZTaCcINoFiWI';


let giphyRequest = new XMLHttpRequest();
let myData = {}

let giphs = document.getElementById('giphs')

giphyRequest.open('GET', `http://api.giphy.com/v1/gifs/search?q=hug&api_key=AFEPytBGSvTRnhdqk3XZZTaCcINoFiWI`)

giphyRequest.onload = function () {
  myData = JSON.parse(giphyRequest.responseText);
  console.log(myData)
  
  for (let i = 0; i < 16; i++) {
    let newImg = document.createElement('img');
    newImg.setAttribute('src', myData.data[i].images.fixed_height_still.url)
    giphs.appendChild(newImg);
  }
      for(let i = 0; i < images.length; i++){
        images[i].addEventListener('click', () => {
          images[i].setAttribute('src', myData.data[i].images.fixed_height.url)
        })
      }
}

let images = document.getElementsByTagName('img');

giphyRequest.send();

