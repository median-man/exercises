/*
Max Subarray Sum Kata

maxSequence returns an array containing the sequence of elements
from the given array with the greatest possible sum

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
should be 6: [4, -1, 2, 1]

https://www.codewars.com/kata/maximum-subarray-sum/javascript
*/

exports.maxSumSequence = (numbers) => {
  let result = 0;
  let currentSum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    currentSum = Math.max(0, currentSum + numbers[i]);
    result = currentSum > result ? currentSum : result;
  }
  return result;
};
