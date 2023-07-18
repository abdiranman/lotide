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
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };
  
  const without = function(source, itemsToRemove) {
    let filteredArray = [];
    for (let element of source) {
      if (!itemsToRemove.includes(element)) {
        filteredArray.push(element);
      }
    }
    return filteredArray;
  };
  
 
  assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  
 
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]);
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);