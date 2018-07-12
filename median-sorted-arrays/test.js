const {expect} = require('chai');
const {findMedianSortedArrays} = require('./index.js');

describe('findMedianSortedArrays', function() {
  it('should be a function', function() {
    expect(findMedianSortedArrays).to.be.a('function');
  });

  it('should return 1 when arguments are [1] and []', function() {
    const expected = 1;
    const actual = findMedianSortedArrays([1], []);
    expect(actual).to.equal(expected);
  });

  it('should return 2 when arguments are [] and [2]', function() {
    const expected = 2;
    const actual = findMedianSortedArrays([], [2]);
    expect(actual).to.equal(expected);
  });

  it('should return 1 when arguments are [0, 1, 2] and []', function() {
    const expected = 1;
    const actual = findMedianSortedArrays([0, 1, 2], []);
    expect(actual).to.equal(expected);
  });

  it('should return 1 when arguments are [] and [0, 1, 2]', function() {
    const expected = 1;
    const actual = findMedianSortedArrays([], [0, 1, 2]);
    expect(actual).to.equal(expected);
  });

  it('should return 0.5 when arguments are [0, 1] and []', function() {
    const expected = 0.5;
    const actual = findMedianSortedArrays([0, 1], []);
    expect(actual).to.equal(expected);
  });

  it('should return 1 when arguments are [0, 1] and [2]', function() {
    const expected = 1;
    const actual = findMedianSortedArrays([0, 1], [2]);
    expect(actual).to.equal(expected);
  });
});
