const {expect} = require('chai');
const reverse = require('./');

describe('reverse()', () => {
  it('is a function', () => {
    expect(reverse).to.be.a('function');
  });
});
