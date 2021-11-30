const middle = function(array) {
  let result = [];
  let middle = 0;

  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length > 2) {
  //For arrays with odd number of elements, an array containing a single middle element should be returned.
    if (array.length % 2 !== 0) {
      middle = Math.floor(array.length / 2);
      result.push(array[middle]);

    }
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    if (array.length % 2 === 0) {
      let middle = array.length / 2;
      result.push(array[middle - 1]);
      result.push(array[middle]);

    }
  } return result;
};

module.exports = middle;