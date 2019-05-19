require('chai').should();

const {countChange} = require('./');

describe('countChange', () => {
  describe('degenerate tests', () => {
    it('should be a function', () => {
      countChange.should.be.a('function');
    });

    it('should return 0 given no coins', () => {
      const coins = [];
      const amount = 1;
      countChange(amount, coins).should.equal(0);
    });
  });

  describe('when coins contains 1', () => {
    const coins = () => [1];
    it('should return 1', () => countChange(1, coins()).should.equal(1));
  });
});
