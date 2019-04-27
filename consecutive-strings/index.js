exports.longestSequence = (strings, n) => {
  const lastSequenceIndex = strings.length - n;
  let i = 0;
  let result = '';
  while (i <= lastSequenceIndex) {
    const current = strings.slice(i, i + n).join('');
    if (current.length > result.length) {
      result = current;
    }
    i += 1;
  }
  return result;
};
