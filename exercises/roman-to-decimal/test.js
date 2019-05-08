const {expect} = require('chai');
const parseRoman = require('./index');

describe('parseRoman()', () => {
  const test = (given, expected) =>
    () => expect(parseRoman(given)).to.equal(expected);

  it('should return 0 given ""', test('', 0));
  it('should return 1000 given "m"', test('m', 1000));
  it('should return 500 given "d"', test('d', 500));
  it('should return 500 given "c"', test('c', 100));
  it('should return 50 given "l"', test('l', 50));
  it('should return 10 given "x"', test('x', 10));
  it('should return 5 given "v"', test('v', 5));
  it('should return 1 given "i"', test('i', 1));
  it('should return 1001 given "mi"', test('mi', 1001));
  it('should return 1002 given "mii"', test('mii', 1002));
  it('should return 900 given "cm"', test('cm', 900));
  it('should return 994 given "cmxciv"', test('cmxciv', 994));
});
