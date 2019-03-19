'use strict';

const myRequest = new XMLHttpRequest();

let submintBtn = document.getElementById('submitBtn');

submintBtn.onclick = (e) => {
  e.stopPropagation();
  e.preventDefault();
  formPost();
}

function formData(){
  return {
    url: document.getElementById('form-url').value,
    alias: document.getElementById('form-alias').value
  };
}

function responsMessage(inputEvent){
 const status = inputEvent.target.status;
  let message = '';
  let color = 'black';
 if(status === 200){
   const response = JSON.parse(inputEvent.target.responseText);
   message = `Your URL  is aliased to <strong>${response[0].alias}</strong> and your secret code is <strong>${response[0].secretCode}</strong>`;
   clearForm();
  }else if (status === 400){
    message = `Your alias is already in use!`;
    color = 'red';
  }
  addDiv(message, color);
}

function addDiv(inputText, color){
  let div = document.getElementById('message');
  div.setAttribute('style', `color: ${color};`);
  div.innerHTML = inputText;


}

function colorText(inputNode, color){
  inputNode.setAttribute('style', `color = ${color}`);
}

function formPost(){
  myRequest.open('POST', '/api/links');
  myRequest.onload = (e) => {
    responsMessage(e);
  }
  myRequest.setRequestHeader('Content-Type', 'application/json');
  myRequest.send(JSON.stringify(formData()));
}

function clearForm(){
  document.getElementById('form-url').value = '',
  document.getElementById('form-alias').value = '';
}