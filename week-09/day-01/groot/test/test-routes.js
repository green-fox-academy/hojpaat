'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(400)
    .expect({ error: 'I am Groot!'})
    .end((err, res) => {
      t.error(err);
      t.end();
    })
})

test('groot endpoint', (t) => {
  request(app)
    .get('/groot?message=this')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({ received: 'this', translated: 'I am Groot!'})
    .end((err, res) => {
      t.error(err);
      t.end();
    })
})