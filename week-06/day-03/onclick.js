'use strict';
// Turn the party on and off by clicking the button. (the whole page)

let button = document.querySelector('button');
let div = document.querySelector('div');
button.onclick = () => {
  if(div.className == 'party'){
    div.className = '';
    button.innerText = 'Party On'
  }else{
    div.className = 'party';
  button.innerText = 'Party Off';
  }
}