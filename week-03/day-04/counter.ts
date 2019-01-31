'use strict';
export{ }

function countdown (n: number) {
  if (n > 0) {
    console.log(n);
    countdown(n-1);
  }else if(n === 0){
    console.log(n);
  }
}

countdown(8)