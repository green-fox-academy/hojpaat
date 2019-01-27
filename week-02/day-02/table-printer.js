'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key









const ingredients = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

let ingr = ingredients;

let firstRow = '+' + '-'.repeat((ingredients[0].name).length)
console.log(firstRow);
console.log(ingr[0].name);

/*function printFirstRow (){
  for (let j: number; j < (Object.keys(ingr)).length; j++) {

    let charachters: number [] = [];
    charachters = ingr.map(value => (value.name).length);
    
    
    firstRow += '+';
    for(let i: number = 0; i < Math.max(...charachters); i++) {
      firstRow += '-';
    }
    firstRow += '+';
    
  }
}*/

// function printOut (){
//   for (let i: number = 0; i < 5)
// }


// console.log(firstRow);
