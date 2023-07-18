const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const tail = function(array) {
    if (array.length <= 1) {
      return [];
    }
    return array.slice(1);
  };
  
  
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const originalLength = words.length;
  tail(words);
  assertEqual(words.length, originalLength); 