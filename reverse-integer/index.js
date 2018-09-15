const reverseDigits = (n) => parseFloat(
  n.toString().split('').reverse().join('')
);

module.exports = function reverse(n) {
  const isNegative = n < 0;
  return isNegative ? -1 * reverseDigits(-1 * n) : reverseDigits(n);
};
