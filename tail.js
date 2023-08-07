const assertEqual = require('./assertEqual');
  
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