function createNode(value, next) {
  return {value, next};
}

function createLinkedList(...values) {
  const nodes = [];
  const addNode = (val, i) => {
    const node = createNode(val, nodes[i - 1] || null);
    nodes.push(node);
  };
  values.reverse().forEach(addNode);

  const head = nodes[nodes.length - 1];

  return {head};
}

function addTwo() {

}

module.exports = {createNode, createLinkedList, addTwo};
