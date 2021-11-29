const eqArrays = require('./eqArrays');
const assertArraysEqual = function (ary1, ary2){
  if(eqArrays(ary1, ary2)){
    console.log(`yes, it is ${eqArrays(ary1, ary2)}`);
  } else { 
    console.log(`No, it is ${eqArrays(ary1, ary2)}`);
  }
  
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

module.exports = assertArraysEqual;
