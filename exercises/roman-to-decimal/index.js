const valueMap = {
  m: 1000,
  d: 500,
  c: 100,
  l: 50,
  x: 10,
  v: 5,
  i: 1,
};

module.exports = function parseRoman(roman) {
  if (roman.length === 0) return 0;
  if (roman.length === 1) return valueMap[roman];

  let value = valueMap[roman[0]];
  let next = valueMap[roman[1]];

  if (next > value) return next - value + parseRoman(roman.substring(2));

  return valueMap[roman[0]] + parseRoman(roman.substring(1));
};
