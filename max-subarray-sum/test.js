require('chai').should();

const {maxSumSequence} = require('./');

describe('maxSequence', () => {
  describe('degenerate cases', () => {
    it('should return 0 given an empty array', () => {
      maxSumSequence([]).should.equal(0);
    });

    it('should return 0 given all negative numbers', () => {
      maxSumSequence([-1]).should.equal(0);
    });
  });

  describe('basic tests', () => {
    const tests = [
      '[1] should return 1',
      '[1, 2, 3] should return 6',
      '[1, -5, 1] should return 1',
      '[3, -1, 2] should return 4',
      '[-2, 1, -3, 4, -1, 2, 1, -5, 4] should return 6',
    ];

    const doTest = (testStr) => {
      const numbersEndsAt = testStr.indexOf(']');
      const numbersJson = testStr.substr(0, numbersEndsAt + 1);
      const numbers = JSON.parse(numbersJson);
      const indexOfExpectedReturn = testStr.lastIndexOf(' ') + 1;
      const expected = parseInt(testStr.substr(indexOfExpectedReturn));
      it(testStr, () => maxSumSequence(numbers).should.equal(expected));
    };

    tests.forEach(doTest);
  });
});
