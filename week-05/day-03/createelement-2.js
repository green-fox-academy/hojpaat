'use strict';

// Remove the king from the list.

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

var ul = document.getElementsByTagName('ul')[0];
var childRemove = ul.children[0];
ul.removeChild(childRemove);

var asteroids = [];
planetData.forEach(element => {
  if(element.asteroid === true){
    asteroids.push(element.content);
  };
}
)

console.log(asteroids);



