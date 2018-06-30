const {expect} = require('chai');
const {twoSum} = require('./two-sum.js');

describe('twoSum', () => {
  it('should be a function', () => {
    expect(twoSum).to.be.a('function');
  });
});
