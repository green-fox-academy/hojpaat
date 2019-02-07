'use strict';
import { fibonacci } from './fibonacci'
let test = require('tape');

test('Testing fibonacci function', t => {
  let actual: number = fibonacci(6);
  let expected: number = 8;


  t.equal(actual, expected, 'Test fibonacci');
  t.notEqual(actual, 5, 'If it brings back one number earlier')
  t.end();
})