// Import the eqObjects function to compare objects for equality
const eqObjects = require('./eqObjects');

// Define the assertObjectsEqual function to compare and log assertions
const assertObjectsEqual = function(actual, expected) {
  // Use the eqObjects function to compare the actual and expected objects
  const isEqual = eqObjects(actual, expected);
  
  // Check if the objects are equal and log the appropriate message
  if (isEqual) {
    console.log(`✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

// Example test cases (commented out for now)
// const obj1 = {a: 1, b: 2, c: [1, 2, 3]};
// const obj2 = {c: [1, 2, 3], b: 2, a: 1};
// const obj3 = {a: 1, b: 2, c: [1, 2, 3], d: 4};
// const obj4 = {a: 1, b: 2, c: [1, 2, 4]};

// Perform assertions for the example test cases
// assertObjectsEqual(obj1, obj2); // should log "Assertion Passed: { a: 1, b: 2, c: [ 1, 2, 3 ] } === { a: 1, b: 2, c: [ 1, 2, 3 ] }"
// assertObjectsEqual(obj1, obj3); // should log "Assertion Failed: { a: 1, b: 2, c: [ 1, 2, 3 ] } !== { a: 1, b: 2, c: [ 1, 2, 3 ], d: 4 }"
// assertObjectsEqual(obj1, obj4); // should log "Assertion Failed: { a: 1, b: 2, c: [ 1, 2, 3 ] } !== { a: 1, b: 2, c: [ 1, 2, 4 ] }"

// Export the assertObjectsEqual function for use in other modules
module.exports = assertObjectsEqual;