'use strict';
export{}

let string1: string = "Hello";

let value: number = string1.localeCompare("This is Hello");

console.log(value);

var re = /apples/; 
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges"); 
console.log(newstr)

var re = /(\w+)\s(\w+)/; 
var str = "zara ali"; 
var newstr = str.replace(re, "$2, $1"); 
console.log(newstr);

let matrix: any [] = ["hello", " bello", [0, 1, 2]];


console.log(matrix[2][2]);

let test2: number [] = [0, 1, 2];

test2 = [0, 1, 3];
console.log(test2);

test2 = [0, 1, 2, 3];
console.log(test2);


let myArray2: number [] = [1 ,2 ,3];

myArray2.push(9);
console.log(myArray2);


var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
var n = fruits.includes('Mango');
console.log(n);