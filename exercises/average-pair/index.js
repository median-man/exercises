/*
  Returns true if there is a pair of values in the given array
  whose average equals the target value.

  Constraints: values is a sorted array. (ascending)
*/
function averagePair(values, targetAvg) {
  let targetSum = targetAvg * 2;
  let i = 0;
  let j = values.length - 1;
  while (i < j) {
    const sum = values[i] + values[j];
    if (sum === targetSum) {
      return true;
    }
    if (sum < targetSum) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return false;
}

module.exports = {averagePair};
