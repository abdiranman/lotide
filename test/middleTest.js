// const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const assert = require('chai').assert;

describe('middle', () => {
    it('should return an empty array for input [1]', () => {
      const result = middle([1]);
      assert.deepEqual(result, []);
    });
  
    it('should return an empty array for input [1, 2]', () => {
      const result = middle([1, 2]);
      assert.deepEqual(result, []);
    });
  
    it('should return [2] for input [1, 2, 3]', () => {
      const result = middle([1, 2, 3]);
      assert.deepEqual(result, [2]);
    });
  
    it('should return [3] for input [1, 2, 3, 4, 5]', () => {
      const result = middle([1, 2, 3, 4, 5]);
      assert.deepEqual(result, [3]);
    });
  
    it('should return [2, 3] for input [1, 2, 3, 4]', () => {
      const result = middle([1, 2, 3, 4]);
      assert.deepEqual(result, [2, 3]);
    });
  
    it('should return [3, 4] for input [1, 2, 3, 4, 5, 6]', () => {
      const result = middle([1, 2, 3, 4, 5, 6]);
      assert.deepEqual(result, [3, 4]);
    });
  });


// // TEST CODE
// assertArraysEqual(middle([1]), []); // Expected: []
// assertArraysEqual(middle([1, 2]), []); // Expected: []
// assertArraysEqual(middle([1, 2, 3]), [2]); // Expected: [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected: [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Expected: [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected: [3, 4]

module.exports = middle;