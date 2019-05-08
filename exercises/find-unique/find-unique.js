function findUnique(ints) {
  const xor = (x, y) => x ^ y;
  return ints.reduce(xor, 0);
}

module.exports = findUnique;
