'use strict';

const express = require('express');
const app = express();

let shipCargo = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: 'empty',
  ready: false
}

app.get('/rocket', (req, res) => {

})