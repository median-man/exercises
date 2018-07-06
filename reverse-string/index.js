function reverse(str) {
  return str.length === 0 ? str : reverse(str.slice(1)) + str[0];
  // return str.split('').reduce((rev, str) => char + rev, '');
}

module.exports = reverse;
