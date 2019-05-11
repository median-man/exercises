require('chai').should();

const {duplicateArguments} = require('./');

describe('duplicateArguments', () => {
  it('should be a function', () => {
    duplicateArguments.should.be.a('function');
  });

  it('should return false given no args', () => {
    duplicateArguments().should.be.false;
  });

  it('should return true given 1, 1', () => {
    duplicateArguments(1, 1).should.be.true;
  });

  it('should return false given 1, 2', () => {
    duplicateArguments(1, 2).should.be.false;
  });
});
