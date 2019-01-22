'use strict';
export {}
const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function candyOwner (a: any []): void {
  a.forEach(value => {
    if (value.candies > 4) {
      console.log(value.name);
    }
  });
}

candyOwner(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candyOwner2 (a: any []): number {
  let candy: number = 0;
  a.forEach(value => { //'for loop' for add together the candies
    candy += value.candies;
    return candy;
  });
  return (candy / a.length); // calculates average
}

console.log(candyOwner2(students));