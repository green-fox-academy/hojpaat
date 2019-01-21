'use strict';
export{}

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drink: string [] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drink = drink.map(function(a) {
  a += a;
  return a;
});

console.log(drink);