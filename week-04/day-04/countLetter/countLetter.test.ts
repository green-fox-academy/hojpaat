'use strict';
import { countLetter } from './countLetter'
let test = require('tape');

test('Testing countLetter function', t =>
{
  let testResult: object = countLetter('akartratkarakara');
  let expected: object = {a: 7, k: 3, r: 4, t: 2}

  t.deepEqual(testResult, expected, 'Check if the countLetter works fine')


t.end();
})
