'use strict';

/*
?q=funny+cat&api_key=YOUR_API_KEY
api key 
http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=AFEPytBGSvTRnhdqk3XZZTaCcINoFiWI
*/
const giphyEndpoint = 'http://api.giphy.com/v1/gifs/search?q='
const searchedExpression = 'sloth'
const myKey = '&api_key=AFEPytBGSvTRnhdqk3XZZTaCcINoFiWI';


let giphyRequest = new XMLHttpRequest();
let myData = {}

let giphs = document.getElementById('giphs')

giphyRequest.open('GET', `${giphyEndpoint}${searchedExpression}${myKey}`)

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

