function superStreetFighterSelection(fighters, position, moves) {
  const grid = new Grid(fighters);
  let currentPosition = position;
  const results = [];

  const movementDispatch = {
    up: () => grid.moveUp(currentPosition),
    down: () => grid.moveDown(currentPosition),
    left: () => grid.moveLeft(currentPosition),
    right: () => grid.moveRight(currentPosition),
  };

  moves
    .map((direction) => movementDispatch[direction])
    .forEach((move) => {
      currentPosition = move(currentPosition);
      results.push(grid.fighterAt(currentPosition));
    });

  return results;
}

class Grid {
  /*
    fighters must be 2-d, rectangular array with at lest 1 row
  */
  constructor(fighters) {
    this.fighters = fighters;
  }

  fighterAt([row, column]) {
    return this.fighters[row] ? this.fighters[row][column] : null;
  }

  height() {
    return this.fighters.length;
  }

  width() {
    return this.fighters[0].length;
  }

  moveUp([row, column]) {
    const above = [row - 1, column];
    if (this.fighterAt(above)) {
      return above;
    }
    return [row, column];
  }

  moveDown([row, column]) {
    const below = [row + 1, column];
    if (this.fighterAt(below)) {
      return below;
    }
    return [row, column];
  }

  moveLeft([row, column]) {
    const left = [row, column - 1];

    if (this.fighterAt(left)) {
      return left;
    }

    if (column > 0) {
      return this.moveLeft(left);
    }

    return this.moveLeft([row, this.width()]);
  }

  moveRight([row, column]) {
    const right = [row, column + 1];

    if (this.fighterAt(right)) {
      return right;
    }

    if (column < this.width()) {
      return this.moveRight(right);
    }

    return this.moveRight([row, -1]);
  }
}

module.exports = {superStreetFighterSelection, Grid};
