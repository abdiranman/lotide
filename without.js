// Define the eqArrays function to compare arrays for equality
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Define the assertArraysEqual function to compare arrays and log assertions
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Define the without function to remove specified items from an array
const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

// Test cases for the without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
const modifiedWords = without(words, ["lighthouse"]);
assertArraysEqual(modifiedWords, ["hello", "world"]);

// Verify that the original 'words' array remains unchanged
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;