require('chai').should();

const {longestSequence} = require('./');

describe('consecutive strings', () => {
  const test = (strings, n, expected) => {
    let message = `should return "${expected}" `;
    message += `given strings = ${JSON.stringify(strings)}`;

    it(message, () => longestSequence(strings, n).should.equal(expected));
  };

  describe('n = 1', () => {
    const n = 1;
    test(['a'], n, 'a');
    test(['b'], n, 'b');
    test(['a', 'ab'], n, 'ab');
    test(['ab', 'a'], n, 'ab');
    test(['a', 'a', 'ab'], n, 'ab');
  });

  describe('n = 2', () => {
    const n = 2;
    test(['a', 'b'], n, 'ab');
    test(['a', 'a', 'bb'], n, 'abb');
  });

  describe('n = 3', () => {
    const n = 3;
    test(['a', 'a', 'a', 'bb'], n, 'aabb');
  });

  describe('acceptance', () => {
    test(['d', 'ef', 'ghi', 'j', 'klmn', 'o'], 3, 'ghijklmn');
  });
});
