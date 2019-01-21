'use strict';
export { }

let lineCount: number = 5;
let space: string = "";
let star: string = "";


for (let i: number = 0; i < ((lineCount + 1) * 0.5); i++) {
    for (let j: number = 1; j < (lineCount * 0.5 - i); j++) {
        space += "0";
    }
    for (let k: number = 0; k < (2 * i + 1); k++) {
        star += "*";
    }
    console.log(space + star);
    star = "";
    space = "";
}

/*for (let i: number = 0; i < (lineCount * 0.5 - 1); i++) {
    for (let j: number = (lineCount); j > (lineCount - i - 1); j--) {
        space += "0";
    }
    for (let k: number = (lineCount); k > (2 * (i + 1)); k--) {
        star += "*";
    }
    console.log(space + star);
    star = "";
    space = "";
}*/


