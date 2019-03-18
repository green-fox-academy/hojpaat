'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let message = req.query.message;
  let translation = {};

  if(typeof message !== 'undefined'){
    translation.received = message;
    translation.translated = 'I am Groot!'
    res.status(200);
  }else {
    translation.error = 'I am Groot!'
    res.status(400);
  }
  res.json(translation);
});

module.exports = app;