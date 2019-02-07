'use strict';

import { anagram } from './anagram';

let test = require('tape');

test('testing anagram function', t => {
 let actual: boolean = anagram('mert érdemes', 'érdemes mert');
 let notTrueCase: boolean = anagram('mert érdemes', 'árdemes rt e m');
 let expected: boolean = true;

 t.ok(actual, expected, 'They are anagrams');
 t.notOk(notTrueCase, false, 'They are not anagrams');
 t.end();
})