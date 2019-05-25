require('chai').should();
const {firstNonRepeatingLetter} = require('./');

describe('firstNonRepeatingLetter', () => {
  it('should handle a single letter', () =>
    firstNonRepeatingLetter('a').should.equal('a'));

  it('should handle two unique letters', () =>
    firstNonRepeatingLetter('ab').should.equal('a'));

  it('should return "" given "aa"', () =>
    firstNonRepeatingLetter('aa').should.equal(''));

  it('should return "b" given "abac"', () =>
    firstNonRepeatingLetter('abac').should.equal('b'));

  it('should return "b" given "abAc"', () =>
    firstNonRepeatingLetter('abAc').should.equal('b'));

  it('should return "B" given "aBAc"', () =>
    firstNonRepeatingLetter('aBAc').should.equal('B'));
});
