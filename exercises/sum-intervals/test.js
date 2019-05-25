require('chai').should();

const {sumIntervals} = require('./');

describe('sumIntervals', () => {
  it('should be a function', () => {
    sumIntervals.should.be.a('function');
  });

  it('should sum one interval', () => sumIntervals([[1, 2]]).should.equal(1));
  it('should sum overlapping', () =>
    sumIntervals([[1, 5], [2, 6]]).should.equal(5));
});
