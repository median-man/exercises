/*
  Returns the largest possible sum of "sliding" down the pyramid
  from top to bottom passing through one adjacent node at each level.

  pyramidSlideDown([[1], [1, 2], [1, 4, 2]]) // 7 (1 + 2 + 4)
*/
function pyramidSlideDown(pyramid) {
  let sums = pyramid.pop();
  while (pyramid.length) {
    sums = pyramid.pop().map((val, i) => val + Math.max(sums[i], sums[i + 1]));
  }
  return sums[0];
}

module.exports = {pyramidSlideDown};
