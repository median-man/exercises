const romanNumerals = {
  1000: 'm',
  500: 'd',
  100: 'c',
  50: 'l',
  10: 'x',
  5: 'v',
  1: 'i',
};

function toRoman(num) {
  if (num === 0) return '';

  if (num >= 1000) return romanNumerals[1000] + toRoman(num - 1000);
  if (num >= 900) return subtractRoman(100, num);
  if (num >= 500) return romanNumerals[500] + toRoman(num - 500);
  if (num >= 400) return subtractRoman(100, num);
  if (num >= 100) return romanNumerals[100] + toRoman(num - 100);
  if (num >= 90) return subtractRoman(10, num);
  if (num >= 50) return romanNumerals[50] + toRoman(num - 50);
  if (num >= 40) return subtractRoman(10, num);
  if (num >= 10) return romanNumerals[10] + toRoman(num - 10);
  if (num >= 9) return subtractRoman(1, num);
  if (num >= 5) return romanNumerals[5] + toRoman(num - 5);
  if (num >= 4) return subtractRoman(1, num);
  return romanNumerals[1] + toRoman(num - 1);
}

function subtractRoman(subtract, num) {
  return romanNumerals[subtract] + toRoman(num + subtract);
}

module.exports = toRoman;
