const {expect} = require('chai');
const {findMedianSortedArrays} = require('./index.js');

describe('findMedianSortedArrays', function() {
  it('should be a function', function() {
    expect(findMedianSortedArrays).to.be.a('function');
  });
});
