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