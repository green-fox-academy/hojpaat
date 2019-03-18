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

const addAmmo = function addAllAmmo(inputObj) {
  return inputObj.caliber25 + inputObj.caliber30 + inputObj.caliber50;
}

const checkShipStatus = function setShipStatus(inputAmmoAmount, inputShip) {
  if (inputAmmoAmount > 100) {
    inputShip.shipstatus = 'overloaded';
  } else if (inputAmmoAmount === 100) {
    inputShip.shipstatus = 'full';
  } else if (inputAmmoAmount === 0) {
    inputShip.shipstatus = 'empty';
  } else {
    inputShip.shipstatus = `${inputAmmoAmount}%`;
  }
}

const checkReady = function readyState(inputShip) {
  inputShip.shipstatus === 'full' ? inputShip.ready = true : inputShip.ready = false
}

app.get('/rocket/fill', (req, res) => {
  let caliber = req.query.caliber * 100;
  let ammo = parseInt(req.query.amount);

  shipCargo[`caliber${caliber}`] = ammo;

  let ammoSum = addAmmo(shipCargo);
  let ammoRatio = ammoSum / maxAmmo * 100;

  checkShipStatus(ammoRatio, shipCargo);
  checkReady(shipCargo);

  let answer = {
    received: req.query.caliber,
    amount: ammo,
    shipstatus: shipCargo.shipstatus,
    ready: shipCargo.ready
  }

  res.json(answer);

})

module.exports = app;