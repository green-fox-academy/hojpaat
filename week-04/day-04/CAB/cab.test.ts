'use strict';

import { CAB, Game} from './cab';

let test = require('tape');

test('Testing CAB game', t => {
  let game1 = new Game(1, 2, 3, 4);
  let game2 = new Game(2, 5, 6, 6);

  t.deepEqual(game1.guess([1, 2, 3, 4]), ['cow', 'cow', 'cow', 'cow'])

  t.end();
})
