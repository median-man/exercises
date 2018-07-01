const {expect} = require('chai');
const {twoSum} = require('./two-sum.js');

describe('twoSum', () => {
  it('should be a function', () => {
    expect(twoSum).to.be.a('function');
  });

  it('twoSum([0, 0], 0) should return [0, 1]', () => {
    const expected = [0, 1];
    const actual = twoSum([0, 0], 0);
    expect(actual).to.deep.equal(expected);
  });

  it('twoSum([0, 2, 1], 1) should return [0, 2]', () => {
    const expected = [0, 2];
    const actual = twoSum([0, 2, 1], 1);
    expect(actual).to.deep.equal(expected);
  });

  it('twoSum([0, 2, 3, 1], 1) should return [0, 3]', () => {
    const expected = [0, 3];
    const actual = twoSum([0, 2, 3, 1], 1);
    expect(actual).to.deep.equal(expected);
  });

  it('twoSum([0, 1, 2], 3) should return [1, 2]', () => {
    const expected = [1, 2];
    const actual = twoSum([0, 1, 2], 3);
    expect(actual).to.deep.equal(expected);
  });

  it('twoSum([2, -3, 5], 2) should return [1, 2]', () => {
    const expected = [1, 2];
    const actual = twoSum([2, -3, 5], 2);
    expect(actual).to.deep.equal(expected);
  });
});
