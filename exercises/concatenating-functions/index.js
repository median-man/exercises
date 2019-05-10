/*
  From Code Wars - https://www.codewars.com/kata/concatenating-functions

  Extend function prototype so that functions have a pipe method which
  returns a function that will invoke a callback function with result
  of the function instance invoked with params.

  Ex.:

  function addOne(n) { return n + 1 }
  function square(n) { return n * n }
  addOne.pipe(square)(1) // 4
*/

// eslint-disable-next-line
Function.prototype.pipe = function(fn) {
  return (...args) => fn(this(...args));
};
