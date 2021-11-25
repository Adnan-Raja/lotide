const letterPositions = function(sentence) {
  const result = {};
   for(let i = 0; i < sentence.length; i++){
    if(sentence[i] !== " ") {
      if(result[sentence[i]]){
      result[sentence[i]].push(i); //result is object, sentence[i] is key in the object.
    } else {
        result[sentence[i]] = [i]; // result is object, and sentence[i] is key created in object and [i] created array with index.
      }
    }
  }return result;
};
console.log(letterPositions("lighthouse in the house"));