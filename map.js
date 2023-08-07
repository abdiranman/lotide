// Import the eqArrays function for comparing arrays (assuming it's defined in './eqArrays')
const eqArrays = require('./eqArrays');

// Define the assertArraysEqual function to compare arrays and log assertions
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define the map function to apply a callback to each element of an array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases for the map function
const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, word => word.toUpperCase());
assertArraysEqual(result1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const result2 = map(words, word => word.length);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);

const result3 = map(words, word => word[0]);
assertArraysEqual(result3, ["g", "c", "t", "m", "t"]);

module.exports = map;