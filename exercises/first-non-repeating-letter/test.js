require('chai').should();
const {firstNonRepeatingLetter} = require('./');

describe('firstNonRepeatingLetter', () => {
  describe('degenerate tests', () => {
    it('given an empty string', () => {
      firstNonRepeatingLetter('').should.equal('');
    });

    it('given a letter', () => {
      firstNonRepeatingLetter('a').should.equal('a');
    });
  });

  describe('basic tests', () => {
    it('should return "a" given "ab"', () => {
      firstNonRepeatingLetter('ab').should.equal('a');
    });

    it('should return "" given "aa"', () => {
      firstNonRepeatingLetter('aa').should.equal('');
    });

    it('should return "b" given "aab"', () => {
      firstNonRepeatingLetter('aab').should.equal('b');
    });

    it('should return "T" given "sTreSS"', () => {
      firstNonRepeatingLetter('sTreSS').should.equal('T');
    });
  });
});
