function countChange(amount, coins) {
  if (amount === 0) return 0;
  return coins[0] === amount ? 1 : 0;
}

module.exports = {countChange};
