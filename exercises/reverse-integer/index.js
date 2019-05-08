const isOutOfBounds = (n) => {
  const upperBound = Math.pow(2, 31); // 32-bit max
  return n > upperBound;
};

const reverseDigits = (n) => {
  const reverse = parseFloat(
    n.toString().split('').reverse().join('')
  );
  return isOutOfBounds(reverse) ? 0 : reverse;
};

module.exports = function reverse(n) {
  const isNegative = n < 0;
  return isNegative ? -1 * reverseDigits(-1 * n) : reverseDigits(n);
};
