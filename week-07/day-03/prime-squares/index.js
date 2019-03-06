'use strict';

let section = document.getElementsByTagName('section')[0];

let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]


console.log(section)

function createDivs(parentElement, divNumber){
  for(let i = 0; i < divNumber; i++){
    let newDiv = document.createElement('div');
    newDiv.innerText = i + 2;
    parentElement.appendChild(newDiv);
  }
}

createDivs(section, 99);

let divs = document.getElementsByTagName('div');

function classPrime(inputElement){
  if (primeNumbers.indexOf(parseInt(inputElement.innerText)) >= 0){
    inputElement.setAttribute('class', 'prime');
  }else{
    inputElement.setAttribute('class', 'not-prime');
  }
}

function addClassPrime(inputArray){

  for(let i = 0; i < inputArray.length; i++){
    classPrime(inputArray[i]);
  }
}

addClassPrime(divs);



{/* <script>
// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored */}

