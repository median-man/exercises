const should = require('chai').should();

const {sumOfPairs} = require('./');

describe('sumOfPairs', () => {
  it('should be a function', () => {
    sumOfPairs.should.be.a('function');
  });

  it('should return undefined', () => {
    should.not.exist(sumOfPairs([], 0));
  });

  it('should return first matching pair', () => {
    sumOfPairs([1, 1], 2).should.eql([1, 1]);
    sumOfPairs([1, 2, 3, 4, 3], 6).should.eql([2, 4]);
  });
});
