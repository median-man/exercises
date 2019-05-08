const {expect} = require('chai');
const {lengthOfLongestSubstr} = require('./index.js');

describe('lengthOfLongestSubstr', function() {
  it('should be a function', function() {
    expect(lengthOfLongestSubstr).to.be.a('function');
  });

  it('should return 0 for an empty string', function() {
    expect(lengthOfLongestSubstr('')).to.equal(0);
  });

  it('should return 3 when input is "abc"', function() {
    expect(lengthOfLongestSubstr('abc')).to.equal(3);
  });

  it('should return 2 when input is "aba"', function() {
    expect(lengthOfLongestSubstr('aba')).to.equal(2);
  });

  it('should return 2 when input is "aab"', function() {
    expect(lengthOfLongestSubstr('aab')).to.equal(2);
  });

  it('should return 3 when input is "abcba"', function() {
    expect(lengthOfLongestSubstr('abcba')).to.equal(3);
  });

  it('should return 6 when input is "azbzclkazb"', function() {
    const actual = lengthOfLongestSubstr('azbzclkazb');
    expect(actual).to.equal(6);
  });
});
