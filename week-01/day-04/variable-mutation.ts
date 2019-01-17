'user strict';
export{}
let a: number = 3;

a += 10;
console.log(a);

let b: number = 100;
b -= 7;
console.log(b);

let c: number = 44;
c *= 2;
console.log(c);

let d: number = 125;
d /= 5;
console.log(d);

let e: number = 8;
e **= 2;
console.log(e);

let f1: number = 123;
let f2: number = 345;
console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;
console.log(g2 * 2 > g1);

let h: number = 1357988018575474;
console.log(0 === h % 11);

let j: number = 1521;
console.log (j % 3 === 0 || j % 5 === 0);

let k: string = "Apple";
k = k +" " + k + " " + k + " " + k;
console.log(k);