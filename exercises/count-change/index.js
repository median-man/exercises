function countChange(amount, coins) {
  if (amount < 0) return 0;
  if (amount === 0) return 1;
  let result = 0;
  for (let i = coins.length - 1; i > -1; i -= 1) {
    result += countChange(amount - coins[i], coins.slice(0, i + 1));
  }
  return result;
}

module.exports = {countChange};
