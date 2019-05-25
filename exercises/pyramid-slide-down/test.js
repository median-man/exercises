require('chai').should();

const {pyramidSlideDown} = require('./');

describe('pyramidSlideDown', () => {
  it('should be a function', () => {
    pyramidSlideDown.should.be.a('function');
  });

  it('single level', () => pyramidSlideDown([[1]]).should.equal(1));

  it('two levels', () => pyramidSlideDown([[1], [1, 2]]).should.equal(3));

  it('acceptance test', () => {
    const pyramid = [
      [75],
      [95, 64],
      [17, 47, 82],
      [18, 35, 87, 10],
      [20, 4, 82, 47, 65],
    ];
    pyramidSlideDown(pyramid).should.equal(390);
  });
});
