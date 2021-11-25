const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F44D}\u{1F44D}\u{1F44D} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F44E}\u{1F44E}\u{1F44E} Assertion Failed: ${actual} !== ${expected}`);
  }
};
/*The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. 
It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers.*/

const countLetters = function(strg) {
  const result = {};
  //counter
  for( const elements of strg){
    if(elements !== " ") {
      if(result[elements]){
      result[elements] += 1;       
    } else {
      result[elements] = 1;
      }
    }
  }return result;

};
console.log(countLetters("lighthouse in the house"));