'use strict';

const myRequest = new XMLHttpRequest();

myRequest.open('GET', '/endpoint');

myRequest.onload = () => {
  ///dos
  let myVariable = JSON.parse(myRequest.responseText); //create JSON from the responseText
};

myRequest.send(); //send request

//stop bubbling and default behavior
submintBtn.onclick = (e) => {
  e.stopPropagation();
  e.preventDefault();
}

function formPost(){
  myRequest.open('POST', '/api/links');
  myRequest.onload = (e) => {
    responsMessage(e);
  }
  myRequest.setRequestHeader('Content-Type', 'application/json');
  myRequest.send(JSON.stringify(formData()));
}

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