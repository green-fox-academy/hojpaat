'use strict';

import { Numbers} from './sum';

let test = require('tape');

test('Testing Numbers class sum() method', t =>{
  let testNumbers = new Numbers([1, 2, 3]);
  let emptyNumber = new Numbers([]);
  let expected: number = 6;
  t.equal(testNumbers.sum(), expected, 'Are they equal?');
  t.notEqual(testNumbers.sum(), 55, 'They are not equal');
  // t.equal(emptyNumber.sum(), undefined, 'Are they equal?');
  t.deepEqual(testNumbers, [], 'Is it an empty array?')
  t.end();
}
)