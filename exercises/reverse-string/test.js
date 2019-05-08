const {expect} = require('chai');
const reverse = require('./index.js');

describe('reverse()', function() {
  it('should return "a" when input is "a"', function() {
    expect(reverse('a')).to.equal('a');
  });

  it('should return "ba" when input is "ab"', function() {
    expect(reverse('ab')).to.equal('ba');
  });

  it('should return "cba" when input is "abc"', function() {
    expect(reverse('abc')).to.equal('cba');
  });

  it('should return "" when input is ""', function() {
    expect(reverse('')).to.equal('');
  });
});
