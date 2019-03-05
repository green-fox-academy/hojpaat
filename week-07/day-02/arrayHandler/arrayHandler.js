'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());
const functions = {
  sum: (inputArray) => {
  
    return inputArray.reduce(((accumulator, current) => accumulator += current), 0);
  },
  multiply: (inputArray) => inputArray.reduce(function (accumulator, current) { return accumulator *= current; }),

  double: (inputArray) => inputArray = inputArray.map(function (value) { return value * 2; })
}



app.post('/arrays', function (req, res) {
  let test = req.body;
  let actions = Object.keys(functions);
  let output = {};
  console.log(test.numbers === []);
  
  if(actions.indexOf(test.what) >= 0 && test.numbers[0] !== undefined){
    output = {
      what: test.what,
    test: 'this',
    numbers: functions[test.what](test.numbers)
    }
  } else if(test.numbers !== undefined && test.numbers[0] !== undefined){
    output = {
      error: 'Please choose from sum, multiply and double'
    }
  }else {
    output = {
      error: 'Please provide what to do with the numbers!'
    }
  }
  

  res.json(output);
});

app.listen(PORT, function () {
  console.log('Server started');
});
