require('chai').should();

const {moveZeroes: moveZeros} = require('./');

describe('moveZeros', () => {
  it('should move zeroes to the end', () => {
    const arr = [0, 1, 2, 3];
    moveZeros(arr).should.eql([1, 2, 3, 0]);
  });
});
