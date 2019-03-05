'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let output = {};
  if(input === undefined){
    output = { error: 'Please provide an input!'}
   } else {
     output = { input : parseInt(input), double: parseInt(input *2)};
   }
  res.json(output);
});

app.listen(PORT, () => {
  console.log('Server started');
  
})
