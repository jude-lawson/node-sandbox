var assert = require('chai').assert;

describe('Something that I am describing', function() {
  context('That thing under some context', function() {
    it('does a thing', function() {

    });

    it('can assert true', function() {
      assert(true);
    });

    it('can assert that 1 is 1', function() {
      assert.equal(1, 1);
    });

    it('can assert 2 is not 3', function() {
      assert.notEqual(2, 3);
    });

    it('can assert that something is a given data type', function() {
      assert.isNumber(42);
      assert.isObject({ answer: 42 });
      assert.isArray([1, 2, 3, 4]);
      var thingIHaventDefined;

      assert.isUndefined(thingIHaventDefined);
    });

    it('can compare two objects that contain the same key/value pair', function() {
      var actualArray = [1,2,3,4];

      assert.deepEqual(actualArray, [1,2,3,4]);
    });

    it('can compare two objects that contain the same key/value pairs', function() {
      var actualObject = { name: 'Nate', module: 4 };
      
      assert.deepEqual(actualObject, { name: 'Nate', module: 4 });
    });
  });
});
