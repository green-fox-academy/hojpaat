'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./backend');


test('yondu', (t) => {
  request(app)
  .get('/yondu?distance=100&time=10')
  .expect('Content-Type', /json/)
  .expect(200)
  .expect({
    distance: 100,
    time: 10,
    speed: 10
  })
  .end((err, res) => {
    t.error(err);
    t.end();
  })
})