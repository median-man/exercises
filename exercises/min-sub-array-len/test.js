require('chai').should();

const {minSubArrayLen} = require('./');

describe('minSubArrayLen', () => {
  it('should be a function', () => {
    minSubArrayLen.should.be.a('function');
  });

  it('[1], 2 should return 0', () => {
    minSubArrayLen([1], 2).should.equal(0);
  });

  it('[1], 1 should return 1', () => {
    minSubArrayLen([1], 1).should.equal(1);
  });

  it('[2], 1 should return 1', () => {
    minSubArrayLen([2], 1).should.equal(1);
  });

  it('[1, 1], 2 should return 2', () => {
    minSubArrayLen([1, 1], 2).should.equal(2);
  });

  it('[1, 2], 2 should return 1', () => {
    minSubArrayLen([1, 2], 2).should.equal(1);
  });

  it('[1, 2, 1, 7, 2, 2], 4 should return 1', () => {
    minSubArrayLen([1, 2, 1, 7, 2, 2], 4).should.equal(1);
  });
});
