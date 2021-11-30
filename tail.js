const tail = function(arr) {
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
};

module.exports = tail;