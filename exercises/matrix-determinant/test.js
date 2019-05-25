require('chai').should();

const {determinant} = require('./');

describe('matrixDeterminant', () => {
  it('should be a function', () => {
    determinant.should.be.a('function');
  });

  it('should solve 1 x 1 matrix', () => {
    determinant([[1]]).should.equal(1, '| 1 | => 1');
    determinant([[2]]).should.equal(2, '| 2 | => 2');
  });

  it('should solve 2 x 2 matrix', () => {
    determinant([[1, 2], [3, 4]]).should.equal(-2);
  });

  it('should solve 3 x 3 matrix', () => {
    determinant([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).should.equal(0);
  });
});
