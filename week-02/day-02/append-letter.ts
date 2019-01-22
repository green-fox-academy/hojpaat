'use strict';
export{}

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA (a: string []): string [] {
  a = a.map( value => {
    return value.concat("a");
  });
  return a;
}

console.log(appendA(far));

export = appendA;