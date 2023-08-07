// Import the eqArrays function for comparing arrays (assuming it's defined in './eqArrays')
const eqArrays = require('./eqArrays');

// Define the assertArraysEqual function to compare arrays and log assertions
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define the takeUntil function to extract elements from an array until a condition is met
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

// Test cases for the takeUntil function
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---');

const data3 = [1, 2, 3, 4, 5];
const results3 = takeUntil(data3, x => x === 3);
assertArraysEqual(results3, [1, 2]);

console.log('---');

const data4 = [];
const results4 = takeUntil(data4, x => x === 42);
assertArraysEqual(results4, []);

module.exports = takeUntil;