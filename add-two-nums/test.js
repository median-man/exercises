const {expect} = require('chai');
const {createNode, createLinkedList, addTwo} = require('./index.js');

describe('addTwo()', function() {
  it('should be defined', function() {
    expect(addTwo).to.be.a('function');
  });
});
