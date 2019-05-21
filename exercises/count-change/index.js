function countChange(amount, coins) {
  let result = 0;
  for (const coin of coins) {
    result += amount % coin === 0 ? 1 : 0;
  }
  return result;
}

module.exports = {countChange};
