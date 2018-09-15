const {expect} = require('chai');
const reverse = require('./');

describe('reverse()', () => {
  it('is a function', () => {
    expect(reverse).to.be.a('function');
  });

  it('should return 0', () => {
    expect(reverse(0)).to.equal(0);
  });

  it('should return 1', () => {
    expect(reverse(1)).to.equal(1);
  });

  it('should return 12', () => {
    expect(reverse(21)).to.equal(12);
  });

  it('should return -1', () => {
    expect(reverse(-1)).to.equal(-1);
  });

  it('should return 21 when the input is 120', () => {
    expect(reverse(120)).to.equal(21);
  });

  it('should return 0 when output overflows 32 bits', () => {
    expect(reverse(1534236469)).to.equal(0);
  });
});
