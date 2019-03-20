'use strict';
require('es6-promise');

let promise = Promise.reject(new Error('ERROR!!!!'));

promise.catch(console.log);