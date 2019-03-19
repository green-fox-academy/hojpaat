'use strict';

const myRequest = new XMLHttpRequest();

myRequest.open('GET', '/endpoint');

myRequest.onload = () => {
  ///dos
  let myVariable = JSON.parse(myRequest.responseText); //create JSON from the responseText
};

myRequest.send(); //send request

//stop bubbling and default behavior
event.stopPropagation();
event.preventDefault();