// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    const length = array.length;
    if (length <= 2) {
      return [];
    }
    const midIndex = Math.floor(length / 2);
    if (length % 2 === 1) {
      return [array[midIndex]];
    } else {
      return [array[midIndex - 1], array[midIndex]];
    }
  };
  
  // TEST CODE
  assertArraysEqual(middle([1]), []); // Expected: []
  assertArraysEqual(middle([1, 2]), []); // Expected: []
  assertArraysEqual(middle([1, 2, 3]), [2]); // Expected: [2]
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected: [3]
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Expected: [2, 3]
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected: [3, 4]