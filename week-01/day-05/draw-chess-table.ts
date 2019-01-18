'use strict';
export{}

let row1: string = "% % % % ";
let row2: string = " % % % %";

for (let i: number = 0; i < 8; i++) {
    if (i % 2 !== 0) {
        console.log(row1);
    } else {
        console.log(row2);
    }
}