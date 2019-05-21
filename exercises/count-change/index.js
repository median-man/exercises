function countChange(amount, coins) {
  return amount % coins[0] === 0 ? 1 : 0;
}

module.exports = {countChange};
