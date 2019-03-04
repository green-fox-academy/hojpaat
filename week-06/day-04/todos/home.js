'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const todos = [
  'get up',
  'code',
  'go back to bed',
];

app.get('/', (req, res) => {
  res.render('home', {todo: todos});
})

app.listen(PORT, (req, res) => {
  console.log(`Server started on ${PORT} port`);
  
})
