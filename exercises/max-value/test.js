const {expect} = require('chai');
const maxValue = require('./');

describe('maxValue', function() {
  it('returns 0 when capacity is 0', () => {
    const capacity = 0;
    const types = [{value: 1, weight: 1}];
    const expected = 0;
    expect(maxValue(types, capacity)).to.equal(expected);
  });

  it('returns Infinity given a type {weight: 0, value: positive number', () => {
    const capacity = 1;
    const types = [{value: 10, weight: 0}, {value: 1, weight: 1}];
    const expected = Infinity;
    expect(maxValue(types, capacity)).to.equal(expected);
  });

  describe('when capacity is 1', function() {
    const capacity = 1;

    it('should return 1, given types is [{weight: 1, value: 1}]', function() {
      const types = [{weight: 1, value: 1}];
      expect(maxValue(types, capacity)).to.equal(1);
    });

    it('should return 3, given types is [{weight: 1, value: 3}]', function() {
      const types = [{weight: 1, value: 3}];
      expect(maxValue(types, capacity)).to.equal(3);
    });

    it('should return 2, given types is [{weight: 1, value: 1}, ' +
      '{weight: 1, value: 2}]',
      function() {
        const types = [{weight: 1, value: 1}, {weight: 1, value: 2}];
        expect(maxValue(types, capacity)).to.equal(2);
      }
    );

    it('should return 1, given types is [{weight: 1, value: 1}, ' +
      '{weight: 2, value: 2}]',
      function() {
        const types = [{weight: 1, value: 1}, {weight: 2, value: 2}];
        expect(maxValue(types, capacity)).to.equal(1);
      }
    );
  });

  describe('when capacity is 2', function() {
    const capacity = 2;

    it('should use type where weight = 1',
      () => {
        const expected = 4;
        const types = [{weight: 2, value: 3}, {weight: 1, value: 2}];
        expect(maxValue(types, capacity)).to.equal(expected);
      }
    );

    it('should use type where weight = 2',
      () => {
        const expected = 3;
        const types = [{weight: 2, value: 3}, {weight: 1, value: 1}];
        expect(maxValue(types, capacity)).to.equal(expected);
      }
    );
  });

  describe('when capacity is 3', function() {
    const capacity = 3;

    it('should use type where weight = 3', () => {
      const expected = 3;
      const types = [{weight: 3, value: 3}];
      expect(maxValue(types, capacity)).to.equal(expected);
    });

    it('should use type where weight = 1 to reach max value', () => {
      const expected = 6;
      const types = [{weight: 3, value: 3}, {weight: 1, value: 2}];
      expect(maxValue(types, capacity)).to.equal(expected);
    });

    it('should use combination of types to reach max value', () => {
      const expected = 4;
      const types = [
        {weight: 3, value: 2},
        {weight: 2, value: 3},
        {weight: 1, value: 1},
      ];
      expect(maxValue(types, capacity)).to.equal(expected);
    });
  });

  describe('when capacity is 4', () => {
    const capacity = 4;

    it('should use type where weight is 2', () => {
      const expected = 6;
      const types = [
        {weight: 3, value: 2},
        {weight: 2, value: 3},
        {weight: 1, value: 1},
      ];
      expect(maxValue(types, capacity)).to.equal(expected);
    });
  });

  describe('other capacities', () => {
    it('finds the max value for any given array of types', () => {
      const capacity = 20;
      const types = [
        {weight: 7, value: 160},
        {weight: 3, value: 90},
        {weight: 2, value: 15},
      ];
      const expected = 555;
      expect(maxValue(types, capacity)).to.equal(expected);
    });
  });
});
