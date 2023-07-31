const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const findKeyByValue = function(object, value) {
    for (const key in object) {
      if (object[key] === value) {
        return key;
      }
    }
    return undefined;
  };
  
  // Test cases
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  // Test cases
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  // Additional test cases
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), undefined);
  