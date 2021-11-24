const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(ary1, ary2) {
  if (eqArrays(ary1, ary2)) {
    console.log(`yes, it is ${eqArrays(ary1, ary2)}`);
  } else {
    console.log(`No, it is ${eqArrays(ary1, ary2)}`);
  }
};
const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      result.push(source[i]);
    }
  }
  return result;
};

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["hello", "world", "lighthouse", "right"], ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [1]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse", "right"]);