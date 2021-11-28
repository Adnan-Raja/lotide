// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F44D}\u{1F44D}\u{1F44D} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F44E}\u{1F44E}\u{1F44E} Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(4, 3);


