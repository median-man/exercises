/*
  "Codewars: Your order, please"
  https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
*/
module.exports.order = (words) => {
  return words
    .split(' ')
    .sort(compareWords)
    .join(' ');
};

function compareWords(a, b) {
  return a.match(/\d/) - b.match(/\d/);
}
