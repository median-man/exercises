const {expect} = require('chai');

const toRoman = require('./');

describe('toRoman()', () => {
  // single symbol cases
  it('should return "i" given 1', () => expect(toRoman(1)).to.equal('i'));
  it('should return "v" given 5', () => expect(toRoman(5)).to.equal('v'));
  it('should return "10" given 10', () => expect(toRoman(10)).to.equal('x'));
  it('should return "c" given 100', () => expect(toRoman(100)).to.equal('c'));
  it('should return "l" given 50', () => expect(toRoman(50)).to.equal('l'));
  it('should return "d" given 500', () => expect(toRoman(500)).to.equal('d'));
  it('should return "m" given 1000', () => expect(toRoman(1000)).to.equal('m'));

  // additive cases
  it('should return "ii" given 2', () => expect(toRoman(2)).to.equal('ii'));
  it('should return "vi" given 6', () => expect(toRoman(6)).to.equal('vi'));
  it('should return "xx" given 20', () => expect(toRoman(20)).to.equal('xx'));
  it('should return "li" given 51', () => expect(toRoman(51)).to.equal('li'));
  it('should return "cc" given 200', () => expect(toRoman(200)).to.equal('cc'));
  it('should return "di" given 501', () => expect(toRoman(501)).to.equal('di'));
  it(
    'should return "mm" given 2000',
    () => expect(toRoman(2000)).to.equal('mm')
  );

  // subtractive cases
  it('should return "cm" given 900', () => expect(toRoman(900)).to.equal('cm'));
  it('should return "cd" given 400', () => expect(toRoman(400)).to.equal('cd'));
  it('should return "xc" given 90', () => expect(toRoman(90)).to.equal('xc'));
  it('should return "xl" given 40', () => expect(toRoman(40)).to.equal('xl'));
  it('should return "ix" given 9', () => expect(toRoman(9)).to.equal('ix'));
  it('should return "iv" given 4', () => expect(toRoman(4)).to.equal('iv'));
});
