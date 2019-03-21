'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./server.js')

test('api/game', (t) => {
  request(app)
  .get('/api/game')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => {
    t.error(err);
    t.end();
  })
})

test('delete question', (t) => {
  request(app)
  .delete('/api/questions/53')
  .expect(200)
  .end((err, res) => {
    t.error(err);
    t.end();
  })
})

  test('delete incorrect question id', (t) => {
    request(app)
    .delete('/apiquestions/1003')
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.end();
    })
  })
