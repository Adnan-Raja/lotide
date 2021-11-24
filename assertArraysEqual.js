const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){ 
    return false;
  }
       for (var i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;   
};

const assertArraysEqual = function (ary1, ary2){
  if(eqArrays(ary1, ary2)){
    console.log(`yes, it is ${eqArrays(ary1, ary2)}`);
  } else { 
    console.log(`No, it is ${eqArrays(ary1, ary2)}`);
  }
  
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false
