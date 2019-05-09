class Exercise {
  constructor(name, functionName) {
    this.name = name;
    this.functionName = functionName;
  }

  get sourceCode() {
    return [
      `function ${this.functionName}() {}`,
      '',
      `module.exports = {${this.functionName}};`,
      '',
    ].join('\n');
  }

  get testCode() {
    return [
      `require('chai').should();`,
      '',
      `const {${this.functionName}} = require('./');`,
      '',
      `describe('${this.functionName}', () => {`,
      `  it('should be a function', () => {`,
      `    ${this.functionName}.should.be.a('function');`,
      '  });',
      '});',
      '',
    ].join('\n');
  }
}

function createExercise(name, functionName) {
  return Object.freeze(new Exercise(name, functionName));
}

module.exports = {createExercise};
