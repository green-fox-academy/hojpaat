'use strict';
export{}

let lineCount: number = 6;
let rowChar: string ="";

for (let i: number = 0; i < lineCount; i++) {
    //makes the upper and the bottom line of the square
    if ( i === 0 || i === (lineCount - 1)) {
        for (let j: number = 0; j < lineCount; j++) {
            rowChar += "%";
        }
            console.log(rowChar);
            rowChar = "";
    } else { //makes the sides
        rowChar = "%";
        for (let k: number = 1; k < (lineCount - 1); k++) {
            rowChar += " ";
        }
        rowChar += "%";
        console.log(rowChar);
        rowChar = "";
    }
}