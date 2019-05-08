const {expect} = require('chai');
const findUnique = require('./find-unique');

describe('find unique', function() {
  it('should be a function', function() {
    expect(findUnique).to.be.a('function');
  });

  const tests = [
    {
      given: [1],
      expect: 1,
    },
    {
      given: [2],
      expect: 2,
    },
    {
      given: [1, 1, 2],
      expect: 2,
    },
    {
      given: [1, 5, 3, 1, 4, 2, 3, 4, 2],
      expect: 5,
    },
  ];

  const runTest = ({given, expect: result}) => {
    const testMessage = `[${given.join()}] should return ${result}`;
    it(testMessage, () => expect(findUnique(given)).to.equal(result));
  };

  tests.forEach(runTest);
});
