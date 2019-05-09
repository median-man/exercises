require('chai').should();

const {createExercise} = require('./exercise');

describe('exercise', () => {
  it('should have name, and functionName properties', () => {
    const exercise = createExercise('my-func', 'myFunc');
    exercise.name.should.equal('my-func');
    exercise.functionName.should.equal('myFunc');
  });

  it('should have a sourceCode property', () => {
    const exercise = createExercise('my-func', 'myFunc');
    const expectedSourceCode = [
      'function myFunc() {}',
      '',
      'module.exports = {myFunc};',
      '',
    ].join('\n');
    exercise.sourceCode.should.equal(expectedSourceCode);
  });

  it('should have a testCode property', () => {
    const exercise = createExercise('my-func', 'myFunc');
    const expectedTestCode = [
      `require('chai').should();`,
      '',
      `const {myFunc} = require('./')`,
      `describe('myFunc', () => {`,
      `  it('should be a function', () => {`,
      `    myFunc.should.be.a('function')`,
      '  });',
      '});',
      '',
    ].join('\n');
    exercise.testCode.should.equal(expectedTestCode);
  });

  it('should be sealed', () => {
    const exercise = createExercise('my-func', 'myFunc');
    exercise.should.be.sealed;
  });
});
