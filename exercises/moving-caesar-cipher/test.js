require('chai').should();

const {movingShift, demovingShift} = require('./');

describe('movingShift', () => {
  it('should be a function', () => {
    movingShift.should.be.a('function');
  });

  it('should return 5 empty strings', () => {
    movingShift('', 1).should.eql(['', '', '', '', '']);
  });

  it('shifts one letter', () => {
    movingShift('A', 1).should.eql(['B', '', '', '', '']);
  });

  it('wraps at end with capital letters', () => {
    movingShift('Z', 1).should.eql(['A', '', '', '', '']);
  });

  it('shifts lower case letter', () => {
    movingShift('a', 1).should.eql(['b', '', '', '', '']);
  });

  it('shifts wraps lower case letters at end of alphabet', () => {
    movingShift('z', 1).should.eql(['a', '', '', '', '']);
  });

  it('does not shift non-alphabetic characters', () => {
    movingShift('1', 1).should.eql(['1', '', '', '', '']);
  });

  it('shifts letter by 2', () => {
    movingShift('a', 2).should.eql(['c', '', '', '', '']);
  });

  it('shifts 2 letters', () => {
    movingShift('ab', 1).should.eql(['b', 'd', '', '', '']);
  });

  it('shifts 5 letters', () => {
    movingShift('abcde', 1).should.eql(['b', 'd', 'f', 'h', 'j']);
  });

  it('shifts by 27', () => {
    movingShift('a', 27).should.eql(['b', '', '', '', '']);
  });

  it('shifts 27 letters', () => {
    movingShift('a'.repeat(27), 1).should.eql([
      'bcdefg',
      'hijklm',
      'nopqrs',
      'tuvwxy',
      'zab',
    ]);
  });

  it('acceptance', () => {
    movingShift(
      'I should have known that you would have a perfect answer for me!!!',
      1
    ).should.eql([
      'J vltasl rlhr ',
      'zdfog odxr ypw',
      ' atasl rlhr p ',
      'gwkzzyq zntyhv',
      ' lvz wp!!!',
    ]);
  });
});

describe('demovingShift', () => {
  it('should be a function', () => {
    demovingShift.should.be.a('function');
  });

  it('should an empty string', () => {
    const encodedParts = movingShift('', 1);
    demovingShift(encodedParts, 1).should.eql('');
  });

  it('decodes one letter', () => {
    const message = 'A';
    const shift = 1;
    const encodedParts = movingShift(message, shift);
    demovingShift(encodedParts, shift).should.eql(message);
  });

  it('wraps at end with capital letters', () => {
    const message = 'Z';
    const shift = 1;
    const encodedParts = movingShift(message, shift);
    demovingShift(encodedParts, shift).should.eql(message);
  });

  it('decodes 27 letters', () => {
    const message = 'a'.repeat(27);
    const shift = 1;
    const encodedParts = movingShift(message, shift);
    demovingShift(encodedParts, shift).should.eql(message);
  });

  it('does not shift non-alphabetic characters', () => {
    const message = '1';
    const shift = 1;
    const encodedParts = movingShift(message, shift);
    demovingShift(encodedParts, shift).should.eql(message);
  });

  it('acceptance', () => {
    const message =
      'I should have known that you would have a perfect answer for me!!!';
    const shift = 1;
    const encodedParts = movingShift(message, shift);
    demovingShift(encodedParts, shift).should.eql(message);
  });
});
