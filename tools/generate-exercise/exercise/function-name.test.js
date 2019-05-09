require('chai').should();

const {functionName} = require('./function-name');

describe('functionName', () => {
  it('should return "myExerciseFunc" given "my-exercise-func"', () => {
    functionName('my-exercise-func').should.equal('myExerciseFunc');
  });
});
