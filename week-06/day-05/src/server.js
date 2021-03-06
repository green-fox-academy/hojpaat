'use strict';

const modules = require('./assets/js/index')


const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');


app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    photos: modules.images
  })
})


app.listen(PORT, () => {
  console.log('Server started');
  
})