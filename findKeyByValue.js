// Import the assertEqual function for testing (assuming it's defined in './assertEqual')
const assertEqual = require('./assertEqual');

// Define the findKeyByValue function to find the first key that matches the given value
const findKeyByValue = function(object, value) {
  // Iterate through each key in the object
  for (const key in object) {
    // Check if the value of the current key matches the given value
    if (object[key] === value) {
      // Return the key if a match is found
      return key;
    }
  }
  
  // Return undefined if no matching key is found
  return undefined;
};

// Test cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Test cases with different values
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), undefined);

module.exports = findKeyByValue;