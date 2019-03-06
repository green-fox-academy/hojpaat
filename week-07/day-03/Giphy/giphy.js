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


  giphyRequest.open('GET', `${giphyEndpoint}${searchedExpression}${myKey}`)
  
  giphyRequest.onload = () => {
    let myData = JSON.parse(giphyRequest.responseText);
    console.log(myData);
    
  }

giphyRequest.send()


console.log('this')


