'use strict';
export { }
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyFile (copyFrom: string, copyTo: string) {
  try{
    // fs.readFileSync(copyFrom, 'utf-8');
    let text = fs.readFileSync(copyFrom, 'utf-8');
    if(text){
      fs.writeFileSync(copyTo, text);
      console.log('Copy is successful');
    }else {
      throw new Error('Copy is not successful');
    }
  }catch (error) {
    console.log('Copy is unsuccessful2');
  }
}

copyFile('text3.txt', 'text5.txt')