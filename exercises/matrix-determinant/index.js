/*
  Returns the determinant for a square matrix of at least 1 x 1 dimension.
*/
function determinant(matrix) {
  if (matrix.length === 1) return matrix[0][0];
  let result = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    result += calculateTerm(0, i) * (i % 2 === 0 ? 1 : -1);
  }
  return result;

  function calculateTerm(row, col) {
    return matrix[row][col] * determinant(minorOf(row, col));
  }

  function minorOf(row, col) {
    return matrix
      .filter(skipIndexAt(row))
      .map((row) => row.filter(skipIndexAt(col)));
  }

  function skipIndexAt(skip) {
    return (v, i) => i !== skip;
  }
}

module.exports = {determinant};
