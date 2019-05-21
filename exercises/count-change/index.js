function countChange(amount, coins) {
  let result = 0;
  for (let i = 0; i < coins.length; i += 1) {
    result += amount % coins[i] === 0 ? 1 : 0;
  }
  return result;
}

module.exports = {countChange};
