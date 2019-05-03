require('chai').should();

const {order} = require('./');

describe('order-words.order', () => {
  it('should return "" given ""', () => {
    order('').should.equal('');
  });

  it('should return "a1" given "a1"', () => {
    order('a1').should.equal('a1');
  });

  it('should return "a1 b2" given "b2 a1"', () => {
    order('b2 a1').should.equal('a1 b2');
  });

  it('should return "a1 b2 c3" given "b2 c3 a1"', () => {
    order('b2 c3 a1').should.equal('a1 b2 c3');
  });
});
