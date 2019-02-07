'use strict';
import { Apple } from './apple';

let test = require('tape');

test('Testing Apple class getApple() method', t => {
  let testApple = new Apple();
  let expected: string = 'apple';
  let upperCaseExpected: string = 'Apple';
  t.equal(testApple.getApple(), expected, 'apple both');
  t.notEqual(testApple.getApple(), upperCaseExpected, 'apple is not Apple');
  t.equal(testApple.getApple(), upperCaseExpected.toLowerCase(), 'use toLowerCase to check the characters are the same or not')
  t.end();
})