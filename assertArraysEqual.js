const eqArrays = require('./eqArrays');
const assertArraysEqual = function (ary1, ary2){
  if(eqArrays(ary1, ary2)){
    console.log(`yes, it is ${eqArrays(ary1, ary2)}`);
  } else { 
    console.log(`No, it is ${eqArrays(ary1, ary2)}`);
  }
  
};

module.exports = assertArraysEqual;
