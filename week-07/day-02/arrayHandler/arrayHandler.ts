'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
// const functions = {
//   sum: (inputArray) => {
//     inputArray.reduce((accumulator, current) => accumulator += current);
//   },

//   multiply: (inputArray) => {
//     inputArray.reduce((accumulator, current) => accumulator *= current);
//   },

//   double: (inputArray) => {
//     inputArray = inputArray.map(value => value * 2);
//   }
// };


app.post('/arrays', (req, res) => {
  let test = req.body;  
  res.send({
    data: test.what
  })
})

app.listen(PORT, () => {
  console.log('Server started');

})