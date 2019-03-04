'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(PORT, (req, res) =>{
  console.log(`Server started at ${PORT} port`);
  
})