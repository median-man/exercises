function removeNb(n) {
  let results = [];
  const sumN = (n * (1 + n)) / 2;
  const calcB = (a) => (sumN - a) / (a + 1);
  for (let a = 1; a <= n; a += 1) {
    const b = calcB(a);
    if (b !== a && b >= 1 && b <= n && Math.floor(b) === b) {
      results.push([a, b]);
    }
  }
  return results;
}

module.exports = {removeNb};
