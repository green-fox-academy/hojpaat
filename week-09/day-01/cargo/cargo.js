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

let maxAmmo = 12500;
app.get('/rocket', (req, res) => {

  res.json(shipCargo);
})

const addAmmo = function addAllAmmo (inputObj) {
  return inputObj.caliber25 + inputObj.caliber30 + inputObj.caliber50;
}



app.get('/rocket/fill', (req, res) => {
  let caliber = req.query.caliber * 100;
  let ammo = parseInt(req.query.amount);
  
  shipCargo[`caliber${caliber}`] = ammo;

  let ammoSum = addAmmo(shipCargo);

  shipCargo.shipstatus = `${ammoSum / maxAmmo * 100}%`

  shipCargo.shipstatus === '100%' ? shipCargo.ready = true : shipCargo.ready = false;
  
  let answer = {
    received: req.query.caliber,
    amount: ammo,
    shipstatus: shipCargo.shipstatus,
    ready: shipCargo.ready
  }

  res.json(answer);

})

module.exports = app;