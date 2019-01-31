// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

let sum: number = 0;
function numberAdder(n: number): any{
  if(n <= 0){
    return n;
  }else if (n > 0) {
    return n + (numberAdder(n - 1));
  
  }
}

console.log(numberAdder(0));