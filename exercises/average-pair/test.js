require('chai').should();

const {averagePair} = require('./');

describe('averagePair', () => {
  it('should be a function', () => {
    averagePair.should.be.a('function');
  });

  it('should return false given [], 1', () => {
    averagePair([], 1).should.be.false;
  });

  it('should return true given [1, 1], 1', () => {
    averagePair([1, 1], 1).should.be.true;
  });

  it('should return false given [1], 1', () => {
    averagePair([1], 1).should.be.false;
  });

  it('should return false given [1, 1], 2', () => {
    averagePair([1, 1], 2).should.be.false;
  });

  it('should return true given [1, 2, 2], 2', () => {
    averagePair([1, 2, 2], 2).should.be.true;
  });

  it('should return true given [1, 2, 3], 1.5', () => {
    averagePair([1, 2, 3, 3], 2.5).should.be.true;
  });
});
