function twoSum(numbers, target) {
  const complements = {};

  const findNums = (a) => {
    const complement = target - numbers[a];
    const numFound = numbers[a] in complements;
    const findNext = () => {
      complements[complement] = a;
      return findNums(a + 1);
    };
    return numFound ? [complements[numbers[a]], a] : findNext();
  };

  return findNums(0);
}

module.exports = {twoSum};
