'use strict';


const booksEndpoint = '/books'
const ssearchedExpression = '';

const myRequest = new XMLHttpRequest();

myRequest.open('GET', booksEndpoint);

myRequest.onload = () => {
  let books = JSON.parse(myRequest.responseText);
  let h1 = document.getElementsByTagName('h1');
  h1.innerText = 'My books';

  let main = document.getElementById('main');
  let newUl = document.createElement('ul');
  newUl.setAttribute('id', 'bookList')

  for(let i = 0; i < books.length; i++){
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'book');
    newLi.innerText = books[i].book_name;

    newUl.appendChild(newLi);    
  }
  main.appendChild(newUl);
}


myRequest.send()