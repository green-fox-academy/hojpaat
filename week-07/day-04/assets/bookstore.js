'use strict';


const booksEndpoint = '/books'
const ssearchedExpression = '';

const myRequest = new XMLHttpRequest();

const booksButton = document.getElementById('books');
let h1 = document.getElementsByTagName('h1')[0];
const main = document.getElementById('main');

let newUl = document.createElement('ul');
booksButton.addEventListener('click', () => {
  myRequest.open('GET', booksEndpoint);
  
  myRequest.onload = () => {
    newUl.innerText = '';
    let books = JSON.parse(myRequest.responseText);
    h1.innerText = 'Our books';
  
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
})