// Import the assertEqual function for testing 
const assertEqual = require('./assertEqual');

// Define the countOnly function to count specific items in an array
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // Iterate through each item in the array
  for (const item of allItems) {
    // Check if the item should be counted based on the criteria
    if (itemsToCount[item] === true) {
      if (results[item]) {
        // If the 'item' is already counted, increment its count by 1
        results[item] += 1;
      } else {
        // If the 'item' is not yet counted, initialize its count to 1
        results[item] = 1;
      }
    }
  }

  return results;
};

// Test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

// Log the results of counting specific items
console.log(result1);

// Test assertions
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;