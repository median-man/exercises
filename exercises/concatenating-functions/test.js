require('chai').should();

require('./');

describe('concatenating-functions', () => {
  it('should extend the function prototype with a pipe method', () => {
    const myFunction = function() {};
    myFunction.pipe.should.be.a('function');
  });

  it('should return a function', () => {
    const one = function() {
      return 1;
    };
    const addOne = function(n) {
      return n + 1;
    };
    one.pipe(addOne).should.be.a('function');
  });

  it('should pass result of calling instance to receiving function', () => {
    const one = function() {
      return 1;
    };
    const addOne = function(n) {
      return n + 1;
    };
    one
      .pipe(addOne)()
      .should.equal(2);
  });

  it('should should pass initial param to function instance', () => {
    const addOne = function(n) {
      return n + 1;
    };
    const square = function(n) {
      return n * n;
    };
    addOne
      .pipe(square)(1)
      .should.equal(4);
  });
});
