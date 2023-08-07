// Import the assertEqual function for testing (assuming it's defined in './assertEqual')
const assertEqual = require('./assertEqual');

// Define the head function to return the first element of an array
const head = function(array) {
  // Check if the array is empty
  if (array.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  
  // Return the first element of the array
  return array[0];
};

// Export the head function for use in other modules
module.exports = head;