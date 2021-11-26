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


const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let item of array) {    
    if(callback(item)) {      
      break;
    }
    results.push(item);    
  }
  return results;
  //The function will return a "slice of the array with elements taken 
  //from the beginning." It should keep going until the callback/predicate returns a truthy value.
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual((takeUntil(data1, x => x < 0)), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual((takeUntil(data2, x => x === ',')), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

assertArraysEqual((takeUntil(data1, x => x < 0)), [ 1, 2, 5, 6, 2 ]);
assertArraysEqual((takeUntil(data2, x => x === ',')), [ 'I\'ve', 'been', 'is', 'Hollywood' ]);




/*[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]*/