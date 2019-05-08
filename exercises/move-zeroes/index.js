/*
  Given an array, move all zeroes to the end preserving the order of all other
  elements.
  CodeWars: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
*/

function moveZeros(arr) {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
}

module.exports = {moveZeros};
