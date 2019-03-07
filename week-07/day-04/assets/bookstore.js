'use strict';


const booksEndpoint = '/books' //because cross referencing localhost:3000/books is not good
const detailsEndpoint = '/details';
let mainUl = ''
const myRequest = new XMLHttpRequest();

let tableHeader = ['title', 'authors', 'catogry', 'publisher', 'price'];
let bookDetails = ['book_name', 'aut_name', 'cate_descrip', 'pub_name', 'book_price']
const booksButton = document.getElementById('books');
const deatailsButton = document.getElementById('details');
let h1 = document.getElementsByTagName('h1')[0];
const main = document.getElementById('main');

let removeMainChildren = () => {
  if (typeof main.children[0] !== 'undefined') {
    main.children[0].remove();
  }
}


booksButton.addEventListener('click', () => {
  removeMainChildren();

  myRequest.open('GET', booksEndpoint);
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
  removeMainChildren();
  myRequest.open('GET', detailsEndpoint);

  myRequest.onload = () => {
    let details = JSON.parse(myRequest.responseText);
    h1.innerText = 'Details';
    
    let newTable = document.createElement('table');


    for (let j = -1; j < details.length; j++) {
      let newTr = document.createElement('tr');
      //creating the header of the table
      if (j === -1) {
        for (let i = 0; i < tableHeader.length; i++) {
          let newTh = document.createElement('th');
          newTh.innerText = tableHeader[i];
          newTr.appendChild(newTh);
        }
        newTable.append(newTr);
        main.appendChild(newTable);
      } else { //creating the cells of the table
        for (let i = 0; i < bookDetails.length; i++) {
          let newTd = document.createElement('td');
          newTd.innerText = details[j][`${bookDetails[i]}`];
          newTr.appendChild(newTd);
        }
        newTable.append(newTr);
        main.appendChild(newTable);
        // }
        
        
      }
    }



  }
  myRequest.send()
})