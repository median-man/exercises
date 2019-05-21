function countChange(amount, coins, count = 0) {
  if (amount < 0) return 0;
  if (amount === 0) return count + 1;
  let result = count;
  for (let i = coins.length - 1; i > -1; i -= 1) {
    result += countChange(amount - coins[i], coins.slice(0, i + 1));
  }
  return result;
}

module.exports = {countChange};
