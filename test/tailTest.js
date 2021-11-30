const assert = require('chai').assert;
const tail = require('../tail');


describe("#Tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  
  it("returns ['Amazing', 'World'] for ['Hello', 'Amazing', 'World']", () => {
      assert.deepEqual(tail(["Hello", "Amazing", "World"]), ["Amazing", "World"]);
    });  
});