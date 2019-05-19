function countChange(amount, coins) {
  if (amount === 0) return 0;
  return coins.length;
}

module.exports = {countChange};
