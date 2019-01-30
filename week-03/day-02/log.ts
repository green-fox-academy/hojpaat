'use strict';
export { }
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


//import the data from txt file into an array
const fs = require('fs');
let thing: any [][] = [];
function convertToArray (inputFile: string) {
  let importDataArray = (fs.readFileSync(inputFile, 'UTF-8')).split('\r\n');
  thing = importDataArray.map(value => value.split('   '));
}

//convert data array to object

// let myObj = {date:'', IP:'', gp:''};
let arrayObject: any = [];
function makeObject(inputFile: string) {
  convertToArray(inputFile)
  thing.forEach(value => {
    let myObj = {date: value[0], IP: value[1], gp: value[2]};
    arrayObject.push(myObj);
  })
}

//remove duplicates
function removeDuplicates(inputArray: any){
  let uniqueArray = inputArray.filter(function(value, index, output){
    return index == output.indexOf(value);
  });
  console.log(uniqueArray);
}


//creat an array with the IP adresses
let arrayIP: string 
function ipAddress (inputFile: string) {
  makeObject(inputFile);
  let arrayIP = arrayObject.map(value => value.IP);
  removeDuplicates(arrayIP);
}

ipAddress('log.txt');

// POST-GET ratio
function pgRatio(inputFile: string){
  makeObject(inputFile);
  let post: number = 0;
  let get: number = 0;
  arrayObject.forEach(value => {
    if(value.gp === 'POST /'){
      post++;
    }else {
      get++;
      
    }
  })
  console.log(`The GET / POST ratio is: ${get} / ${post}`);
}

// ipAddress('log.txt');
// pgRatio('log.txt');
