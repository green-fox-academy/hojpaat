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
  
  if(input === undefined){
    res.json({
      error: 'Pease provide an input!'
    })
  }else{
    res.json({
      input: parseInt(input),
      double: input * 2
    });
  }

   
});

app.listen(PORT, () => {
  console.log('Server started');
  
})
