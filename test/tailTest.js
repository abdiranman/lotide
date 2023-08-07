// const assertEqual = require('../assertEqual')
const tail = require('../tail')
const assert = require('chai').assert;



describe('tail', () => {
    it('should not modify the original array length when called', () => {
      const words = ["Yo Yo", "Lighthouse", "Labs"];
      const originalLength = words.length;
      tail(words);
      assert.strictEqual(words.length, originalLength);
    });
  });

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const originalLength = words.length;
// tail(words);
// assertEqual(words.length, originalLength); 



module.exports = tail;