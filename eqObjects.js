// Import the assertEqual function for testing 
const assertEqual = require('./assertEqual');

// Import the eqArrays function for comparing arrays 
const eqArrays = require('./eqArrays');

// Define the eqObjects function to compare two objects for equality
const eqObjects = function(object1, object2) {
  // Get the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if the objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate through each key and compare corresponding values
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    // Check if values are arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  // If all key-value pairs are equal, objects are equal
  return true;
};

// Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;