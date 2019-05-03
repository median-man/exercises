/*
  "Codewars: Your order, please"
  https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
*/
module.exports.order = (words) => {
  const wordMap = mapWords(words);
  const result = [];

  // omits words if word numbers are not consecutive from 1
  for (let i = 1; i <= wordMap.size; i += 1) {
    result.push(wordMap[i]);
  }
  return result.join(' ');
};

function mapWords(words) {
  const wordList = words.split(' ');
  let wordMap = {
    size: wordList.length,
  };
  wordList.forEach((word) => {
    const num = findNumInWord(word);
    wordMap[num] = word;
  });
  return wordMap;
}

function findNumInWord(word) {
  return parseInt(word.replace(/[^1-9]+/g, ''));
}
