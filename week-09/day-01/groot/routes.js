'use strict';

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/groot', (req, res) => {
  let message = req.query.message;
  let translation = {};

  if(typeof message !== 'undefined'){
    translation.received = message;
    translation.translated = 'I am Groot!'
  }else {
    translation.error = 'I am Groot!'
  }
  res.json(translation);
});

module.exports = app;