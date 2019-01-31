// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared)

function baseCalc (n: number, base: number){
  if(base === 0){
    return 1;
  }else {
    return n * baseCalc(n, base - 1);
  }
}

console.log(baseCalc(2, 8));