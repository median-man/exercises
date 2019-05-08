const {expect} = require('chai');
const {addTwo, ListNode} = require('./index.js');

const createList = (...vals) => {
  return vals.reverse().reduce((next, val, index, nodes) => {
    const node = new ListNode(val);
    node.next = next;
    return node;
  }, null);
};

describe('ListNode', function() {
  it('should set val property', function() {
    const node = new ListNode(1);
    expect(node.val).to.equal(1);
  });

  it('next should initialy be null', function() {
    const node = new ListNode(1);
    expect(node.next).to.be.null;
  });
});

describe('addTwo()', function() {
  it('should be defined', function() {
    expect(addTwo).to.be.a('function');
  });

  it('should return ListNode where val is 2 when input is 1 and 1', function() {
    const l1 = createList(1);
    const l2 = createList(1);
    const expected = createList(2);
    const actual = addTwo(l1, l2);
    expect(actual).to.deep.equal(expected);
  });

  it('should return first ListNode for 0 -> 1', function() {
    const l1 = createList(9);
    const l2 = createList(1);
    const expected = createList(0, 1);
    const actual = addTwo(l1, l2);
    expect(actual).to.deep.equal(expected);
  });

  it('should return first ListNode for 8 -> 1', function() {
    const l1 = createList(9);
    const l2 = createList(9);
    const expected = createList(8, 1);
    const actual = addTwo(l1, l2);
    expect(actual).to.deep.equal(expected);
  });

  it('should return first ListNode for 1 -> 2', function() {
    const l1 = createList(9);
    const l2 = createList(2, 1);
    const expected = createList(1, 2);
    const actual = addTwo(l1, l2);
    expect(actual).to.deep.equal(expected);
  });

  it('should return first ListNode for 7 -> 0 -> 8', function() {
    const l1 = createList(2, 4, 3);
    const l2 = createList(5, 6, 4);
    const expected = createList(7, 0, 8);
    const actual = addTwo(l1, l2);
    expect(actual).to.deep.equal(expected);
  });
});
