'use strict';
export{}
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse (a: string): string {
let reversedArray: string []= [];
reversedArray = a.split('');
reversedArray.reverse();
a = reversedArray.join('');
return a;
}
console.log(reverse(reversed));

export = reverse;