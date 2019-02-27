'use strict';

// 1) Create an < article > element for each kid

// 2) Create a < h3 > and a < p > element for each article and append them as a child to the < article >
//   - The H3 should contain the owner's name
//     - The p should contain the pet's name

// 3) Add the article to the pets div.

const kids = [
  { 'petName': 'Wattled crane', 'owner': 'Bryant' },
  { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
  { 'petName': 'Mynah, common', 'owner': 'Nelie' },
  { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
  { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
  { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
  { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
  { 'petName': 'Bison, american', 'owner': 'Tommie' },
  { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
  { 'petName': 'Carpet snake', 'owner': 'Veda' },
  { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

var pets = document.getElementById('pets');

function articleNew() {
  var test = document.createElement('article');
  test.innerHTML = '<h3></h3><p></p>';
  return test;
}

var h3Tag = document.createElement('h3');
var pTag = document.createElement('p');
console.log(h3Tag);
console.log(articleNew);


for(var i = 0; i < kids.length; i++){
  pets.appendChild(articleNew());
}

var articles = document.querySelectorAll('article');

articles.forEach((element, index) => {
  element.children[0].innerText = kids[index].owner;
  element.children[1].innerText = kids[index].petName;
})
// articles[0].children[0].innerText = 'red'
console.log(articles[0].children[0])



