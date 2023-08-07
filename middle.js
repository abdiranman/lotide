// Import the eqArrays function for comparing arrays (assuming it's defined in './eqArrays')
const eqArrays = require('./eqArrays');

// Define the middle function to calculate the middle elements of an array
const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return []; // Return an empty array for arrays with 2 or fewer elements
  }
  const midIndex = Math.floor(length / 2);
  if (length % 2 === 1) {
    return [array[midIndex]]; // Return a single-element array for odd-length arrays
  } else {
    return [array[midIndex - 1], array[midIndex]]; // Return a two-element array for even-length arrays
  }
};

// Export the middle function for use in other modules
module.exports = middle;