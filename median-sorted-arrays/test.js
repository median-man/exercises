const {expect} = require('chai');
const {findMedianSortedArrays} = require('./index.js');

describe('findMedianSortedArrays', function() {
  it('should be a function', function() {
    expect(findMedianSortedArrays).to.be.a('function');
  });

  it('should return 1 when given [0, 1] and [2]', function() {
    const actual = findMedianSortedArrays([0, 1], [2]);
    expect(actual).to.equal(1);
  });

  it('should return 2 when given [1, 2] and [3]', function() {
    const actual = findMedianSortedArrays([1, 2], [3]);
    expect(actual).to.equal(2);
  });

  it('should return 2 when given [1] and [2, 3]', function() {
    const actual = findMedianSortedArrays([1], [2, 3]);
    expect(actual).to.equal(2);
  });

  it('should return 2 when given [1, 3] and [2]', function() {
    const actual = findMedianSortedArrays([1, 3], [2]);
    expect(actual).to.equal(2);
  });

  it('should return 2 when given [1] and [3]', function() {
    const actual = findMedianSortedArrays([1], [3]);
    expect(actual).to.equal(2);
  });

  it('should return 2.5 when given [1, 2] and [3, 4]', function() {
    const actual = findMedianSortedArrays([1, 2], [3, 4]);
    expect(actual).to.equal(2.5);
  });

  it('should return 2 when given [2] and []', function() {
    const actual = findMedianSortedArrays([2], []);
    expect(actual).to.equal(2);
  });

  it('should return 2 when given [] and [2]', function() {
    const actual = findMedianSortedArrays([], [2]);
    expect(actual).to.equal(2);
  });

  it('should return 1.5 when given [1, 2, 3, 4] and [0, 1]', function() {
    const actual = findMedianSortedArrays([1, 2, 3, 4], [0, 1]);
    expect(actual).to.equal(1.5);
  });
});
