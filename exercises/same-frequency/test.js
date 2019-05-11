require('chai').should();

const {sameFrequency} = require('./');

describe('sameFrequency', () => {
  it('should be a function', () => {
    sameFrequency.should.be.a('function');
  });

  it('should be false when integers have different lengths', () => {
    sameFrequency(1, 12).should.be.false;
  });

  it('should be true: 1, 1', () => {
    sameFrequency(1, 1).should.be.true;
  });

  it('should be true: 12, 21', () => {
    sameFrequency(12, 21).should.be.true;
  });

  it('should be false: 12, 13', () => {
    sameFrequency(12, 13).should.be.false;
  });
});
