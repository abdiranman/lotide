// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual===expected) {
        console.log (`✅ Assertion Passed: ${actual} === ${expected}`);
    }
    else {
        console.log (`❌ Assertion Failed: ${actual} !== ${expected}`); 
     
    }

};

// TEST CODE
const countLetters = function(sentence) {
    const letterCounts = {};
   const lowerCaseSentence = sentence.toLowerCase();
  
    for (const letter of lowerCaseSentence) {

      if (letter.match(/[a-z]/)) {
        if (letterCounts[letter]) {
       
          letterCounts[letter] += 1;
        } else {
    
          letterCounts[letter] = 1;
        }
      }
    }
  
    return letterCounts;
  };
  
  // Test cases
  console.log(countLetters('LHL')); // Output: { l: 2, h: 1 }
  console.log(countLetters('Hello World')); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }