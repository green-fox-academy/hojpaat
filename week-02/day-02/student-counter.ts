'use strict';
export {}
const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

let candy : number = 0;
let age: number = 0;


function candyCounter (a: any []): any {
  a.forEach( value => {
    candy += value.candies;
  });
  return candy;
}

console.log(candyCounter(students));


// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyCounter2 (a: any []): any {
  a.forEach( value => {
    if (value.candies < 5) {
      age += value.age;
    }
  });
  return age;
}

console.log(candyCounter2(students));