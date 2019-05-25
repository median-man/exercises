/*
  Returns the sum of the length of all intervals in given array less
  any overlap. Intervals must be an array containing an ordered pair of
  intervals a, b where a < b.

  sumIntervals([[1, 3], [6, 9], [2, 4]]) // 6 (4 -1 + 9 - 6)
*/
function sumIntervals(intervals) {
  let visited = {};
  for (const [from, to] of intervals) {
    for (let num = from; num < to; num += 1) {
      visited[num] = 1;
    }
  }
  return Object.keys(visited).length;
}

module.exports = {sumIntervals};
