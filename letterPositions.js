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
      console.log(`✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    } else {
      console.log(`❌ Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    }
  };
  
  const letterPositions = function(sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if (char !== ' ') {
        if (results[char]) {
          results[char].push(i);
        } else {
          results[char] = [i];
        }
      }
    }
  
    return results;
  };
  
  // Test
  const positions = letterPositions("hello");
  assertArraysEqual(positions['h'], [0]);
  assertArraysEqual(positions['e'], [1]);
  assertArraysEqual(positions['l'], [2, 3]);
  assertArraysEqual(positions['o'], [4]);