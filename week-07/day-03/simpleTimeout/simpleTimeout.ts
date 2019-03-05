'use strict';


const apple = (string) => {
  for(let i = 0; i < 3; i++){
    setTimeout(() => console.log(string, i), 3000 * i)
  }
}

apple('apple')

setTimeout(() => console.log('apple'), 3000);
