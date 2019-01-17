'use strict';
export{}

let lineCount: number = 7;
let space: string ="";
let star: string = "";

for (let i: number = 0; i < lineCount; i++) {
    star = "";
    space = "";
    for (let j: number = 0; j < (lineCount-1-i); j++) {
        space += " ";
    }
    for (let k: number = 0; k < (2*i+1); k++) {
        star += "*";
    }
    console.log(space+star);

}


