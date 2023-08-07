// Define the flatten function to flatten a nested array
const flatten = function(arr) {
  let flattenedArray = [];

  // Iterate through each element in the input array
  for (let element of arr) {
    // Check if the element is an array
    if (Array.isArray(element)) {
      // If it's an array, spread its elements and add to the flattened array
      flattenedArray.push(...element);
    } else {
      // If it's not an array, directly add it to the flattened array
      flattenedArray.push(element);
    }
  }

  // Return the flattened array
  return flattenedArray;
};

// Test the flatten function with an example array
console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;