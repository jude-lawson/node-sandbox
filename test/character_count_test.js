const assert = require('chai').assert;
const analyze = require('../character_count').analyze;
const logger = require('../character_count').logger;

describe('Character Count Analyzer', function() {
  it('should return the sum of unique characters in a given bit of text', function() {
    let expected = {
      a: 2,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 1,
      h: 1,
      i: 1,
      j: 1,
      k: 1,
      l: 1,
      m: 1,
      n: 1,
      o: 1,
      p: 1,
      q: 1,
      r: 1,
      s: 1,
      t: 1,
      u: 1,
      v: 1,
      w: 1,
      x: 1,
      y: 1,
      z: 3,
      ';': 1
    };

    assert.deepEqual(analyze('aabcdefg h i jklmnopqrstuvwxyzzz;'), expected);
  });
});

describe('Character Count Logger', function() {
  it('should correctly log the chracter counts', function() {
    assert.equal(logger(analyze('abb')), 'a: 1\nb: 2');
  });
});
