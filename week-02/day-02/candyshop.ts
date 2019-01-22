'use strict';
export{}
let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets (a: string []): any {
  let elements: string = '';
  elements = a.join(',');
  elements = elements.replace('2', 'Croissant');
  elements = elements.replace('false', 'Ice cream');
  a = elements.split(',');
  return(a);
}

console.log(sweets(shopItems));

export = sweets;
