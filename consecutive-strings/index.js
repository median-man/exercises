exports.longestSequence = (strings, n) => {
  if (n < 1) {
    return '';
  }
  const lastSequenceIndex = strings.length - n;
  let result = '';
  for (let i = 0; i <= lastSequenceIndex; i += 1) {
    const current = strings.slice(i, i + n).join('');
    if (current.length > result.length) {
      result = current;
    }
  }
  return result;
};
