const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F44D}\u{1F44D}\u{1F44D} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F44E}\u{1F44E}\u{1F44E} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1).sort();
  let key2 = Object.keys(object2).sort();
  let result = null;
  if (key1.length !== key2.length) {
    return false;
  } else {
    for (let key of key1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        result = eqArrays(object1[key], object2[key]);
      } else if (object1[key] === object2[key]) {
        result = true;
      }
    }
    return result;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
assertEqual((eqObjects(cd, dc)), true);
assertEqual((eqObjects(cd, dc)), false);


const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false
assertEqual((eqObjects(cd, cd2)), true);
//assertEqual((eqObjects(cd, cd2)), false);


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true
assertEqual((eqObjects(ab, ba)), true);
assertEqual((eqObjects(ab, ba)), false);