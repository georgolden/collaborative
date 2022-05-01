'use strict';

const metatests = require('metatests');
const { sum } = require('../api/example.js');

metatests.test('API/example', (test) => {
  test.strictEqual(sum(10, 10), 20);
  test.end();
});
