/*
  Returns true if given integers a and b have the same frequency of digits.

  Constraints: a and b must be positive integers.
*/
function sameFrequency(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();
  if (stringA.length !== stringB.length) return false;

  const frequenciesA = calculateFrequencies(stringA);
  const frequenciesB = calculateFrequencies(stringB);

  for (let digit in frequenciesA) {
    if (frequenciesA[digit] !== frequenciesB[digit]) return false;
  }
  return true;
}

/*
  Returns object mapping each char in s to its frequency in s.

  Ex.: calculateFrequencies('aab') // { a: 2, b: 1 }
*/
function calculateFrequencies(s) {
  const frequencies = {};
  for (let char of s) {
    frequencies[char] = frequencies[char] + 1 || 1;
  }
  return frequencies;
}

module.exports = {sameFrequency};
