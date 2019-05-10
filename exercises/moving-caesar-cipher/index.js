function movingShift(s, shift, encodedMessage = '') {
  if (!s) {
    return divideMessageIntoFiveParts(encodedMessage);
  }
  return movingShift(
    s.substr(1),
    shift + 1,
    encodedMessage + (isLetter(s[0]) ? encode(s[0], shift) : s[0])
  );
}

function divideMessageIntoFiveParts(encodedMessage) {
  const partLength = Math.ceil(encodedMessage.length / 5);
  const parts = ['', '', '', '', ''];
  let partIndex = 0;
  for (let char of encodedMessage) {
    if (parts[partIndex].length === partLength) {
      partIndex += 1;
    }
    parts[partIndex] += char;
  }
  return parts;
}

function encode(char, shift) {
  const offset = calculateOffset(char);
  let charCode = char.charCodeAt(0) + shift - offset;
  return String.fromCharCode((charCode % 26) + offset);
}

function calculateOffset(char) {
  return /[A-Z]/.test(char) ? 65 : /[a-z]/.test(char) ? 97 : 0;
}

function isLetter(char) {
  return /[a-z]/i.test(char);
}

function demovingShift(parts, shift, decodedMessage = '') {
  if (!parts.length) {
    return decodedMessage;
  }

  if (!parts[0].length) {
    return demovingShift(parts.slice(1), shift, decodedMessage);
  }

  const char = parts[0][0];
  parts[0] = parts[0].slice(1);
  return demovingShift(
    parts,
    shift + 1,
    decodedMessage + (isLetter(char) ? decode(char, shift) : char)
  );
}

function decode(char, shift) {
  const offset = calculateOffset(char);
  let code = char.charCodeAt(0) + 26 - (shift % 26) - offset;
  code = (code % 26) + offset;
  return String.fromCharCode(code);
}

module.exports = {movingShift, demovingShift};
