'use strict';
const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  if(typeof distance === 'undefined' || typeof time == 'undefined'){
    res.status(400);
  }
  
  let speed = distance / time;
  let answer = {
    distance: parseInt(distance),
    time: parseInt(time),
    speed: speed
  }

  res.json(answer);
})

module.exports = app;