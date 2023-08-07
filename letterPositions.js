// Import the eqArrays function for comparing arrays 
const eqArrays = require('./eqArrays');

// Define the assertArraysEqual function to compare arrays and log assertions
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

// Define the letterPositions function to map positions of letters in a sentence
const letterPositions = function(sentence) {
  const results = {};

  // Iterate through each character (letter) in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      // Check if the character is already in the results object
      if (results[char]) {
        // If yes, push the current position to the array
        results[char].push(i);
      } else {
        // If not, create an array with the current position
        results[char] = [i];
      }
    }
  }

  // Return the object with letter positions
  return results;
};

// Test the letterPositions function
const positions = letterPositions("hello");
assertArraysEqual(positions['h'], [0]);
assertArraysEqual(positions['e'], [1]);
assertArraysEqual(positions['l'], [2, 3]);
assertArraysEqual(positions['o'], [4]);

module.exports = letterPositions;