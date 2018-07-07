const {expect} = require('chai');
const {createNode, createLinkedList, addTwo} = require('./index.js');

describe('Node', function() {
  it('createNode() should be defined', function() {
    expect(createNode).to.be.a('function');
  });

  it('createNode() returns a new node object', function() {
    const actual = createNode(1, {value: 2, next: null});
    const expected = {
      value: 1,
      next: {value: 2, next: null},
    };
    expect(actual).to.deep.equal(expected);
  });
});

describe('LinkedList', function() {
  it('createLinkedList should be defined', function() {
    expect(createLinkedList).to.be.a('function');
  });

  it('head property should be the first node', function() {
    const expected = {value: 1, next: null};
    const actual = createLinkedList(1).head;
    expect(actual).to.deep.equal(expected);
  });

  it('next propery of the last node should be null', function() {
    const expected = {value: 1, next: null};
    const actual = createLinkedList(1, 1).head.next;
    expect(actual).to.deep.equal(expected);
  });
});

describe('addTwo()', function() {
  it('should be defined', function() {
    expect(addTwo).to.be.a('function');
  });
});
