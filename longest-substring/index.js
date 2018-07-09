function lengthOfLongestSubstr(str) {
  const isCharRepeated = (char, i, chars) => chars.indexOf(char, i + 1) === -1;
  const allUnique = (from, to) => str
    .substring(from, to)
    .split('')
    .every(isCharRepeated);

  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i; j <= str.length; j += 1) {
      result = allUnique(i, j) ? Math.max(result, j - i) : result;
    }
  }
  return result;
}

module.exports = {lengthOfLongestSubstr};
