/*
  From CodeWars - https://www.codewars.com/kata/54d81488b981293527000c8f

  Returns array containing first two numbers (in order of appearance) from
  a given array where the sum of the two numbers equals the 2nd param.

  Ex.: sumOfPairs([1, 2, 3], 4) // [1, 3]
*/
function sumOfPairs(nums, sum) {
  const compliments = new Map();
  for (let num of nums) {
    if (compliments.has(num)) {
      return [compliments.get(num), num];
    }
    compliments.set(sum - num, num);
  }
}

module.exports = {sumOfPairs};
