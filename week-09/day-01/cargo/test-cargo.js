'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./cargo');

test('fill cargo', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=1250')
  .expect('Content-type', /json/)
  .expect(200)
  .expect({
    received: '.50',
    amount: 1250,
    shipstatus: '10%',
    ready: false
  })
  .end((err, res) => {
    t.error(err);
    t.end();
  })
})

test('full cargo', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=12500')
  .expect('Content-type', /json/)
  .expect(200)
  .expect({
    received: '.50',
    amount: 12500,
    shipstatus: 'full',
    ready: true
  })
  .end((err, res) => {
    t.error(err);
    t.end();
  })
})

test('overloaded cargo', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=125000')
  .expect('Content-type', /json/)
  .expect(200)
  .expect({
    received: '.50',
    amount: 125000,
    shipstatus: 'overloaded',
    ready: false
  })
  .end((err, res) => {
    t.error(err);
    t.end();
  })
})

