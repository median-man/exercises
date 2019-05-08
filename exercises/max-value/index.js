module.exports = function maxValue(types, capacity) {
  const maxValues = {0: 0};

  for (let currentCap = 1; currentCap <= capacity; currentCap += 1) {
    maxValues[currentCap] = 0;
    maxValues[currentCap] = types
      .filter(({weight}) => weight <= currentCap)
      .reduce((max, {value, weight}) => {
        if (weight === 0 && value) return Infinity;
        const remainingCap = currentCap - weight;
        return Math.max(maxValues[remainingCap] + value, max);
      }, 0);
  }
  return maxValues[capacity];
};
