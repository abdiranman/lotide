const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

// TEST CODE
assertArraysEqual(middle([1]), []); // Expected: []
assertArraysEqual(middle([1, 2]), []); // Expected: []
assertArraysEqual(middle([1, 2, 3]), [2]); // Expected: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected: [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Expected: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected: [3, 4]

module.exports = middle;