/*
  Takes an exercise name in kabob case and returns
  camel cased string for the name.

  Ex. functionName('my-func') // myFunc
*/
function functionName(name) {
  const [first, ...words] = name.split('-');
  return first + words.map(capitalize).join('');
}

function capitalize(s) {
  return s[0].toUpperCase() + s.substr(1);
}

module.exports = {functionName};
