/*
  Returns true if string parens contains a valid set of ()

  validParentheses('(') === false
  validParentheses('(())') === true
  validParentheses('())(') === false
*/
// my ugly one liner version of this
function validParentheses(parens, value = 0) {
  return value < 0
    ? false
    : !parens
    ? value === 0
    : validParentheses(
        parens.substr(1),
        parens[0] === '(' ? value + 1 : value - 1
      );
}

module.exports = {validParentheses};

// my sensible solution to the problem
// function validParentheses(parens){
//   let value = 0;
//   for (const char of parens) {
//     value += char === ')' ? -1 : 1;
//     if (value < 0) {
//       return false;
//     }
//   }
//   return value === 0;
// }
