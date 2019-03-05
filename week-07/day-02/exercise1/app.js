'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

function sum (number) {
  if(number === 1){
    return 1
  }else{
    return number += sum(number-1)
  }
}

function factor (number){
  if(number === 1){
    return 1
  } else {
    return number *= factor(number-1)
  }
}
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


app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let output = {};
  if(name === undefined && title === undefined){
    output = {error: 'Please provide a name and a title!'};
  }else if (name === undefined){
    output = {error: 'Please provide a name!'}
  }else if(title === undefined){
    output = { error: 'Please provide a title!'}
  }else{
  output = { 'welcome_message': `Oh, hi there ${name}, my dear ${title}!`}
  }

  res.json(output)
})

app.get('/appenda/:appendable', (req, res) => {
  if(req.params.appendable !== undefined){
    res.json({
      'appended': `${req.params.appendable}a`
    });
  }else{
  }
})

app.post('/dountil/:action', (req,res) => {
  let data = req.body;
  let method = req.params;
  let output = {};

  if (method.action === 'sum'){
    output = {
      result: sum(data.until)
    }
  }else if (method.action === 'factor'){
    output = {
      result: factor(data.until)
    }
  }else if(data.until === undefined){
    
    output = {
      error: 'Please provide a number!'
    }
  }
  
  res.json(output)
})

app.listen(PORT, () => {
  console.log('Server started');
  
})
