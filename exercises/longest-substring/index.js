function lengthOfLongestSubstr(str) {
  // sliding window with hash set -> O(1)
  let result = 0;
  let start = 0;
  const charHash = {};
  const chars = str.split('');
  chars.forEach((char, i) => {
    if (charHash.hasOwnProperty(char) && start <= charHash[char]) {
      start = charHash[char] + 1;
    } else {
      result = Math.max(result, i - start + 1);
    }
    charHash[char] = i;
  });
  return result;

  // naive sliding window approach O(n^2)
  // let result = 0;
  // for (let i = 0; i < str.length; i += 1) {
  //   for (let j = i; j <= str.length; j += 1) {
  //     const isUnique = str.substring(i, j).indexOf(str[j]) === -1;
  //     if (isUnique) {
  //       result = Math.max(result, str.substring(i, j + 1).length);
  //     } else {
  //       i += 1;
  //       j = i;
  //     }
  //   }
  // }
  // return result;
}

module.exports = {lengthOfLongestSubstr};
