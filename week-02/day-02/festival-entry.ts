'use strict';
export{}
const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

let entry: string [] = [];

function securityMethod (people = queue[0]){
  if (people.guns !== 0) {
    people.guns -= people.guns;
    watchlist.push(people.name);
    if (people.alcohol !== 0){
      securityAlcoholLoot += people.alcohol;
      people.alcohol -= people.alcohol;
    }
  }else if ( people.alcohol !== 0) {
    securityAlcoholLoot += people.alcohol;
    people.alcohol -= people.alcohol;
    entry.push(people.name);
  } else {
    entry.push(people.name);
  }
}

function securityCheck(people: any [] = queue) {
  people.forEach(securityMethod);
  console.log('Watch list: ' + watchlist);
  console.log('Entered: ' + entry);
  console.log(`Collected alcohol: ${securityAlcoholLoot}`);  
}
 securityCheck(queue);


// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

//export = securityCheck;