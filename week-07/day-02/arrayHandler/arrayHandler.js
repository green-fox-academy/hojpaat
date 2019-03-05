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
  
  res.json({
    what: test.what,
    test: 'this',
    numbers: functions[test.what](test.numbers)
  });
});

app.listen(PORT, function () {
  console.log('Server started');
});
