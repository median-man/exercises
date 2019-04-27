/*
  Did I finish my Sudoku?

  should return "Finished!" if given sudoku array is complete
  should return "Try again!" if sudoku array is incomplete

  input: Number[][]

  A sudoku is complete if each row, column, and region contains the integers
  1 - 9 inclusive.
  https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript
*/

// the sum of 1 - 9 inclusive is 9(9 + 1) / 2 --> 45
// check if sum of each row is 45
// check if sum of each column is 45
// check if sum of each region is 45
// if all 3 are true return "Finished!"
// else return "Try again!"

const doneOrNot = (board) => {
  const completeSum = 45;
  const boardSize = 9;
  const regionSize = 3;
  const isComplete =
    allRowsComplete() && allColumnsComplete() && allRegionsComplete();
  return isComplete ? 'Finished!' : 'Try again!';

  function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  function allRowsComplete() {
    for (let i = 0; i < boardSize; i += 1) {
      if (sum(board[i]) !== completeSum) {
        return false;
      }
    }
    return true;
  }

  function allColumnsComplete() {
    for (let i = 0; i < boardSize; i += 1) {
      const column = board.map((row) => row[i]);
      if (sum(column) !== completeSum) {
        return false;
      }
    }
    return true;
  }

  function allRegionsComplete() {
    for (let rowI = 0; rowI < boardSize; rowI += regionSize) {
      for (let colI = 0; colI < boardSize; colI += regionSize) {
        if (sum(regionAt(rowI, colI)) !== completeSum) {
          return false;
        }
      }
    }
    return true;
  }

  // returns region for given upper left coords
  function regionAt(rowIndex, columnIndex) {
    const endRowAt = rowIndex + regionSize;
    const endColAt = columnIndex + regionSize;
    let result = [];
    for (let i = rowIndex; i < endRowAt; i += 1) {
      result = result.concat(board[i].slice(columnIndex, endColAt));
    }
    return result;
  }
};

module.exports = {doneOrNot};
