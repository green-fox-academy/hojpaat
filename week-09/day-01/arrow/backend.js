'use strict';
const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let distance = parseInt(req.query.distance);
  let time = parseInt(req.query.time);
  let speed = distance / time;

  let answer = {
    distance: distance,
    time: time,
    speed: speed
  }

  res.json(answer);
})

module.exports = app;