/*
  Returns length of smallest sub array in integers whose sum
  is greater than or equal to the target argument.

  Constraints:
    - integers array must contain only positive integers.
    - target must be a positive integer
*/
function minSubArrayLen(integers, target) {
  let minLength = 0;
  let i = 0;
  let j = 0;
  let sum = integers[j];
  while (j < integers.length) {
    if (sum >= target) {
      const length = j - i + 1;
      minLength = Math.min(minLength, length) || length;
      sum -= integers[i];
      i += 1;
    } else {
      j += 1;
      sum += integers[j];
    }
  }
  return minLength;
}

module.exports = {minSubArrayLen};
