const {expect} = require('chai');
const {twoSum} = require('./index');

describe('twoSum()', () => {
  const test = (expected, nums, target) => expect(twoSum(nums, target))
    .to.eql(expected);
  it('returns [0, 1] given [1, 1] and 2', () => test([0, 1], [1, 1], 2));

  it('returns [0, 2] given [1, 0, 2] and 3', () => test([0, 2], [1, 0, 2], 3));

  it(
    'returns [0, 3] given [1, 0, 2, 3] and 4',
    () => test([0, 3], [1, 0, 2, 3], 4)
  );

  it(
    'returns [2, 3] given [1, 1, 2, 3] and 5',
    () => test([2, 3], [1, 1, 2, 3], 5)
  );
});
