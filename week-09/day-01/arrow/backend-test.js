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

test('yondu missing distance', (t) => {
  request(app)
  .get('/yondu?time=10')
  .expect('Content-Type', /json/)
  .expect(400)
  .expect({distance: null, time: 10, speed: null})
  .end((err, res) => {
    t.error(err);
    t.end();
  })
})