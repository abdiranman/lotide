const flatten = function(arr) {
    let flattenedArray = [];
    for (let element of arr) {
      if (Array.isArray(element)) {
        flattenedArray.push(...element);
      } else {
        flattenedArray.push(element);
      }
    }
    return flattenedArray;
  };
  
  
  console.log(flatten([1, 2, [3, 4], 5, [6]])); 