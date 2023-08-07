// TEST/ASSERTION FUNCTIONS
const eqArrays = require('./eqArrays'
)
  
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    const length = array.length;
    if (length <= 2) {
      return [];
    }
    const midIndex = Math.floor(length / 2);
    if (length % 2 === 1) {
      return [array[midIndex]];
    } else {
      return [array[midIndex - 1], array[midIndex]];
    }
  };
  
  module.exports = middle;