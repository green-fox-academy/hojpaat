'use strict';

let test = require('tape');

import{ addNum, subtractNum } from './main'

test('testing addNum function', t => {
  let actual: number =  addNum(4, 5);
  let expected: number = 9;

  t.equal(actual, expected);
  t.notEqual(actual, 4.9, 'They are not equal');
  t.end();
})

test('testing subtractNumb function', t => {
  let diff: number = subtractNum(12, 6);
  let expected: number = 6;

  t.equal(diff, expected, 'They are equals');
  t.notEqual(diff, 12, 'They are not equals');
  t.end();
})

