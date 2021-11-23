// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F44D}\u{1F44D}\u{1F44D} Assertion Passed: ${actual}=== ${expected}`);
  } else {
    console.log(`\u{1F44E}\u{1F44E}\u{1F44E} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");
assertEqual(head([]), "Hello");