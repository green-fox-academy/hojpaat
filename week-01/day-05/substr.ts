'use strict';
export{}

let text: string = "Hello test alma!";
let keyword: string = "eper";
let text2: string = "";
let keyword2: string = "";
let text2Length: number = null;
let keyword2Length: number = null;
let test: string = "";
let found: number = -1;

text2 = text.toLowerCase();
keyword2 = keyword.toLowerCase();
keyword2Length = keyword2.length;
text2Length = text2.length



for (let i: number = 0; i < (text2Length - keyword2Length); i++)  {
    test = text2.substr(i, keyword2Length);
    if (test === keyword2) {
        found = i;
    } else {
    continue}
} 

console.log(found);


