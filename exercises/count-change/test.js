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

    it('should return 1 when coins is [1]', () => {
      countChange(1, [1]).should.equal(1);
    });
  });

  describe('when coins contains [2]', () => {
    const coins = () => [2];

    it('should return 0 given amount = 3', () =>
      countChange(3, coins()).should.equal(0));

    it('should return 1 given amount = 4', () =>
      countChange(4, coins()).should.equal(1));
  });
});
