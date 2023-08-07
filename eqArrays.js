// Define the eqArrays function to compare two arrays for equality
const eqArrays = function(array1, array2) {
  // Check if the arrays have different lengths
  if (array1.length !== array2.length) {
    return false;
  }

  // Iterate through each element of the arrays and compare
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      // If corresponding elements are not equal, arrays are not equal
      return false;
    }
  }

  // If all elements are equal, arrays are equal
  return true;
};

// Export the eqArrays function for use in other modules
module.exports = eqArrays;