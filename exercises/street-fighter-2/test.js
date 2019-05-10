require('chai').should();

const {superStreetFighterSelection, Grid} = require('./');

describe('superStreetFighterSelection', () => {
  let fighters;

  beforeEach(() => {
    fighters = makeTestFighters();
  });

  function makeTestFighters() {
    return [
      ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
      ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
      ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
    ];
  }

  it('should be a function', () => {
    superStreetFighterSelection.should.be.a('function');
  });

  it('should return an empty array given no moves', () => {
    const moves = [];
    const position = [0, 0];
    superStreetFighterSelection(fighters, position, moves).should.eql([]);
  });

  it('should return fighters for one move', () => {
    const position = [1, 1];
    const moves = ['up'];
    const actual = superStreetFighterSelection(fighters, position, moves);
    const expected = ['Ryu'];
    actual.should.eql(expected);
  });

  it('should return fighters for two moves', () => {
    const position = [2, 1];
    const moves = ['up', 'up'];
    const actual = superStreetFighterSelection(fighters, position, moves);
    const expected = ['Ken', 'Ryu'];
    actual.should.eql(expected);
  });

  it('should move left', () => {
    const position = [1, 1];
    const moves = ['left'];
    const actual = superStreetFighterSelection(fighters, position, moves);
    const expected = ['Balrog'];
    actual.should.eql(expected);
  });

  it('should move down', () => {
    const position = [1, 1];
    const moves = ['down'];
    const actual = superStreetFighterSelection(fighters, position, moves);
    const expected = ['T.Hawk'];
    actual.should.eql(expected);
  });

  it('should move right', () => {
    const position = [1, 1];
    const moves = ['right'];
    const actual = superStreetFighterSelection(fighters, position, moves);
    const expected = ['Chun Li'];
    actual.should.eql(expected);
  });

  it('a series of different moves', () => {
    const position = [0, 1];
    const moves = [
      'right',
      'up',
      'left',
      'left', // wraps and skips empty
      'right', // wraps and skips empty
      'down',
      'left',
      'up', // stops at empty
      'down',
      'down', // stops at bottom
      'left', // wraps
    ];
    const actual = superStreetFighterSelection(fighters, position, moves);
    const expected = [
      'E.Honda',
      'E.Honda',
      'Ryu',
      'Guile',
      'Ryu',
      'Ken',
      'Balrog',
      'Balrog',
      'Vega',
      'Vega',
      'M.Bison',
    ];
    actual.should.eql(expected);
  });

  describe('grid', () => {
    let grid;

    beforeEach(() => {
      grid = new Grid(fighters);
    });

    describe('moveUp', () => {
      it('returns position above given position', () => {
        const position = [1, 1];
        grid.moveUp(position).should.eql([0, 1]);
      });

      it('returns same position if no fighter above given position', () => {
        const position = [1, 0];
        grid.moveUp(position).should.eql([1, 0]);
      });

      it('returns same position if current position is in top row', () => {
        const position = [0, 0];
        grid.moveUp(position).should.eql([0, 0]);
      });
    });

    describe('moveDown', () => {
      it('returns position below given position', () => {
        const position = [0, 0];
        grid.moveDown(position).should.eql([1, 0]);
      });

      it('returns same position if no fighter below given position', () => {
        fighters[1][0] = '';
        const grid = new Grid(fighters);
        const position = [0, 0];
        grid.moveDown(position).should.eql(position);
      });

      it('returns same position if current position is in bottom row', () => {
        const position = [fighters.length - 1, 0];
        grid.moveDown(position).should.eql(position);
      });
    });

    describe('moveLeft', () => {
      it('returns position to the left', () => {
        const position = [1, 2];
        grid.moveLeft(position).should.eql([1, 1]);
      });

      it('wraps to end of same row', () => {
        const position = [2, 0];
        const lastColumn = fighters[0].length - 1;
        grid.moveLeft(position).should.eql([2, lastColumn]);
      });

      it('skips over empty cells', () => {
        const position = [0, 1];
        grid.moveLeft(position).should.eql([0, 4]);
      });
    });

    describe('moveRight', () => {
      it('returns position to the right', () => {
        const position = [0, 0];
        grid.moveRight(position).should.eql([0, 1]);
      });

      it('skips over empty cells', () => {
        const position = [0, 0];
        fighters[0][1] = '';
        const grid = new Grid(fighters);
        grid.moveRight(position).should.eql([0, 2]);
      });

      it('skips over multiple empty cells', () => {
        const position = [0, 0];
        fighters[0][1] = '';
        fighters[0][2] = '';
        const grid = new Grid(fighters);
        grid.moveRight(position).should.eql([0, 3]);
      });

      it('wraps to beginning of same row', () => {
        const position = [0, 4];
        grid.moveRight(position).should.eql([0, 1]);
      });
    });
  });
});
