const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F44D}\u{1F44D}\u{1F44D} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F44E}\u{1F44E}\u{1F44E} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //need counter to add result
  let counter = {};
  for(const keys in itemsToCount) {    
    for (const elements of allItems) {
      if(itemsToCount[keys] === true && keys === elements){      
        if(counter[elements]){
        counter[elements] += 1;
        } else {
        counter[elements] = 1;
        }
      
      }
    
    }
  }return counter;
  
};
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

