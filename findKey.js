const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F44D}\u{1F44D}\u{1F44D} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F44E}\u{1F44E}\u{1F44E} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, value) {
  let keys = Object.keys(obj);
   for(let i = 0; i < keys.length; i++)  {
      if( value(obj[keys[i]])) {
      return keys[i];                
    }    
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma");