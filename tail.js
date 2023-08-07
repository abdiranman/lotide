// Import the assertEqual function for testing (assuming it's defined in './assertEqual')
const assertEqual = require('./assertEqual');

// Define the tail function to return all elements of an array except the first one
const tail = function(array) {
  if (array.length <= 1) {
    return []; // Return an empty array for arrays with 1 or fewer elements
  }
  return array.slice(1); // Return the tail of the array
};

// Export the tail function for use in other modules
module.exports = tail;