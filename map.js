const words = ["ground", "control", "to", "major", "tom"];

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




const map = function(array, callback) {  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
  }
  return results;
}

console.log(map(words, word => word[0]));
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(map(words, word => word[0]), [ 'x', 'v', 't', 'm', 's' ])

