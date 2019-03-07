'use strict';


const booksEndpoint = '/books' //because cross referencing localhost:3000/books is not good
const detailsEndpoint = '/details';
let mainUl = ''
const myRequest = new XMLHttpRequest();

let tableHeader = ['title', 'authors', 'catogry', 'publisher', 'price'];
const booksButton = document.getElementById('books');
const deatailsButton = document.getElementById('details');
let h1 = document.getElementsByTagName('h1')[0];
const main = document.getElementById('main');

let removeMainChildren = () => {
  if(typeof main.children[0] !== 'undefined'){
    main.children[0].remove();
  }
}


booksButton.addEventListener('click', () => {

  myRequest.open('GET', booksEndpoint);
  removeMainChildren();
  myRequest.onload = () => {
    let newUl = document.createElement('ul');
    newUl.setAttribute('id', 'bookList')

    let books = JSON.parse(myRequest.responseText);
    h1.innerText = 'Our books';


    for (let i = 0; i < books.length; i++) {
      let newLi = document.createElement('li');
      newLi.setAttribute('class', 'book');
      newLi.innerText = books[i].book_name;
      
      newUl.appendChild(newLi);
    }
    main.appendChild(newUl);
  }
  
  myRequest.send()
})

deatailsButton.addEventListener('click', () => {
  myRequest.open('GET', booksEndpoint);

  // myRequest.onload = () => {
  //   newUl.innerText = '';
  //   let books = JSON.parse(myRequest.responseText);
  //   h1.innerText = 'Details';

  //   newUl.setAttribute('id', 'bookList')

  //   for(let i = 0; i < books.length; i++){
  //     let newLi = document.createElement('li');
  //     newLi.setAttribute('class', 'book');
  //     newLi.innerText = books[i].book_name;

  //     newUl.appendChild(newLi);    
  //   }
  //   main.appendChild(newUl);
  // }


  // myRequest.send()

  let newTable = document.createElement('table');
  for (let i = 0; i < tableHeader.length; i++) {
    let newTh = document.createElement('th');
    newTh.innerText = tableHeader[i];
    newTable.appendChild(newTh);
  }
  main.appendChild(newTable);


})