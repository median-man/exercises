function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwo(l1, l2) {
  const hasNext = (n) => n && n.next;
  let n1 = l1;
  let n2 = l2;
  let node = new ListNode(0);
  const head = node;
  while (n1 || n2) {
    let sum = node.val;
    sum += n1 ? n1.val : 0;
    sum += n2 ? n2.val : 0;
    let isOneDigit = sum < 10;
    let val = isOneDigit ? sum : sum % 10;
    node.val = val;
    let nextVal = Math.floor(sum / 10);
    node.next = (nextVal
      || hasNext(n1)
      || hasNext(n2)) ? new ListNode(nextVal) : null;
    node = node.next;
    n1 = n1 ? n1.next : null;
    n2 = n2 ? n2.next : null;
  }
  return head;
}

module.exports = {addTwo, ListNode};
