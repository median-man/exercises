const {expect} = require('chai');
const {createNode, createLinkedList, addTwo} = require('./index.js');

describe('createNode', function() {
  it('should be defined', function() {
    expect(createNode).to.be.a('function');
  });

  it('should return a Node', function() {
    const actual = createNode(1, {value: 2, next: null});
    const expected = {
      value: 1,
      next: {value: 2, next: null},
    };
    expect(actual).to.deep.equal(expected);
  });
});

describe('createLinkedList()', function() {
  it('should be defined', function() {
    expect(createLinkedList).to.be.a('function');
  });

  it('returns an object')
});

describe('addTwo()', function() {
  it('should be defined', function() {
    expect(addTwo).to.be.a('function');
  });
});
