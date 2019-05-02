/*
  This problem is from Code Wars:
  https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

*/
function firstNonRepeatingLetter(s) {
  const counts = createCharCountMap(s);
  const doesNotRepeat = (char) => counts.get(char.toLowerCase()) === 1;

  for (let i = 0; i < s.length; i += 1) {
    if (doesNotRepeat(s[i])) {
      return s[i];
    }
  }
  return '';
}

function createCharCountMap(s) {
  const counts = new Map();
  for (let i = 0; i < s.length; i += 1) {
    let lowerCase = s[i].toLowerCase();
    if (!counts.has(lowerCase)) {
      counts.set(lowerCase, 0);
    }
    counts.set(lowerCase, counts.get(lowerCase) + 1);
  }
  return counts;
}

module.exports = {firstNonRepeatingLetter};

/*
  PSEUDO-CODE

  input:
  string s
  output first character that is not repeated in s

  example:
  f('stress') = 't'

  should be case insensitive
  f('sTreSS') = 'T'

  let i = 0
  let max = length of s
  let counts = new Map
  let result = ''
  WHILE i < max
    let lowerCase = lower case char
    IF lowerCase not in counts
      counts[lowerCase] = 0
    END IF
    counts[lowerCase] += 1
  END WHILE

  let result = ''
  FOR EACH char in s
    let lowerCase = lower case char
    IF counts[lowerCase] === 1 && no result
      result = char
    END IF
  END FOR

  RETURN result
*/
