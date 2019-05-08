require('chai').should();

const {validParentheses} = require('./');

describe('validParentheses', () => {
  it('should return true given "()"', () => {
    validParentheses('()').should.equal(true);
  });

  it('should return false given ")"', () => {
    validParentheses(')').should.equal(false);
  });

  it('should return false given "()("', () => {
    validParentheses('()(').should.equal(false);
  });

  it('should return false given "(())((()())())"', () => {
    validParentheses('(())((()())())').should.equal(true);
  });
});
