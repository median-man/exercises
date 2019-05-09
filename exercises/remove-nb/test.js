require('chai').should();

const {removeNb} = require('./');

describe('removeNb', () => {
  it('should be a function', () => {
    removeNb.should.be.a('function');
  });

  it('should return an empty []', () => {
    removeNb(1).should.eql([]);
  });

  it('should return [[15,21], [21,15]] given n = 26', () => {
    removeNb(26).should.eql([[15, 21], [21, 15]]);
  });
});
