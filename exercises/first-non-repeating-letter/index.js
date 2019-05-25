/*
  This problem is from Code Wars:
  https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

*/
function firstNonRepeatingLetter(s) {
  const counts = {};
  let letter;
  for (letter of s.toLowerCase()) {
    counts[letter] = counts[letter] + 1 || 1;
  }
  for (letter of s) {
    if (counts[letter.toLowerCase()] === 1) return letter;
  }
  return '';
}

module.exports = {firstNonRepeatingLetter};
