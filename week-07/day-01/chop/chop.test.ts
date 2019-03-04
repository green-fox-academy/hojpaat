'use strict';

import { numberIndex } from './chop'

const test = require('test');

test('Testing chop function', t => {

  t.equal(numberIndex(3, []), -1, 'Check when the input array is empty' );
  t.equal(numberIndex(3, [4]) -1, 'Check when input array has one item and it is not the searched number');
  t.equal(numberIndex(5, [1, 5, 6, 8, 12, 24]), 1, 'test when the number is in the first half of the array and the element\'s number in the array is even');
  t.equal(numberIndex(5, [1, 5, 6, 8, 12]), 1, 'test when the number is in the first half of the array and the element\'s number in the array is odd');
  t.equal(numberIndex(50, [1, 8, 12, 40, 50, 87]), 4, 'test when the number is in the second half of the array and the element\'s number in the array is even')
  t.equal(numberIndex(50, [1, 8, 12, 40, 50, 87, 102]), 4, 'test when the number is in the second half of the array and the element\'s number in the array is odd')
  t.equal(numberIndex(5, [1, 5, 5, 12, 15, 17]), 1, 'test when the number occures more than ones is in the first half of the array and the element\'s number in the array is even');
  t.notEqual(numberIndex(50, [1, 2, 8, 12, 50, 50, 75,80]), 4, 'test when the number occures more than ones is in the first half of the array and the element\'s number in the array is even, make sure it won\'t give back the second occurance');
  
  t.end();
})