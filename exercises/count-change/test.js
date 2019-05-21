require('chai').should();

const {countChange} = require('./');

describe('countChange', () => {
  describe('degenerate tests', () => {
    it('should be a function', () => {
      countChange.should.be.a('function');
    });

    it('should return 0 given no coins', () => {
      countChange(1, []).should.equal(0);
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

  describe('when coins contains [1, 2]', () => {
    const coins = () => [1, 2];

    it('should return 2 given amount = 2', () =>
      countChange(2, coins()).should.equal(2));

    it('should return 2 given amount = 3', () =>
      countChange(3, coins()).should.equal(2));
  });

  describe('acceptance tests', () => {
    it('countChange(10, [5,2,3]) returns 4', () =>
      countChange(10, [5, 2, 3]).should.equal(4));

    it('countChange(11, [5, 7]) returns 0', () =>
      countChange(11, [5, 7]).should.equal(0));
  });
});
