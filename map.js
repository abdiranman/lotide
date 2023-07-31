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
  
  const assertArraysEqual = function(actual, expected) {
    const result = eqArrays(actual, expected);
    if (result) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };
  

  const words = ["ground", "control", "to", "major", "tom"];
 
  const result1 = map(words, word => word.toUpperCase());
  assertArraysEqual(result1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
 
  const result2 = map(words, word => word.length);
  assertArraysEqual(result2, [6, 7, 2, 5, 3]);

  const result3 = map(words, word => word[0]);
  assertArraysEqual(result3, ["g", "c", "t", "m", "t"]);