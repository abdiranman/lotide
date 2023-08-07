// Import the assertEqual function for testing 
const assertEqual = require('./assertEqual');

// Define the countLetters function to count occurrences of letters in a sentence
const countLetters = (sentence) => {
  let objCount = {};

  // Iterate through each character (letter) in the sentence
  for (let letter of sentence) {
    // Exclude spaces from counting
    if (letter !== ' ') {
      // Check if the letter is already in the object
      if (objCount[letter]) {
        // Increment the count for the letter
        objCount[letter] = objCount[letter] + 1;
      } else {
        // Initialize the count for the letter
        objCount[letter] = 1;
      }
    }
  }

  // Return the object with letter counts
  return objCount;
}

// Example sentence to test the countLetters function
let sentence = "The quick brown fox jumps over the lazy dog.";

// Call the countLetters function and log the result
console.log(countLetters(sentence));

// Export the countLetters function for use in other modules
module.exports = countLetters;