// Import the assertEqual function for testing (assuming it's defined in './assertEqual')
const assertEqual = require('./assertEqual');

// Define the findKey function to find the first key that matches the callback condition
const findKey = function(object, callback) {
  // Iterate through each key in the object
  for (const key in object) {
    // Check if the callback returns true for the current value
    if (callback(object[key])) {
      // Return the key if the condition is met
      return key;
    }
  }
  
  // Return undefined if no matching key is found
  return undefined;
};

// TEST CASES
const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

// Test cases with different callback conditions
assertEqual(findKey(restaurants, x => x.stars === 2), "noma");
assertEqual(findKey(restaurants, x => x.stars === 3), "Akaleri");
assertEqual(findKey(restaurants, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(restaurants, x => x.stars === 4), undefined);

module.exports = findKey;