function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwo(l1, l2) {
  const head = new ListNode(0);
  let node = head;
  let carry = 0;
  let list1 = l1;
  let list2 = l2;
  while (list1 || list2) {
    const val1 = list1 ? list1.val : 0;
    const val2 = list2 ? list2.val : 0;
    const sum = val1 + val2 + carry;
    const val = sum % 10;
    carry = Math.floor(sum / 10);
    node.next = new ListNode(val);
    node = node.next;
    list1 = list1 ? list1.next : null;
    list2 = list2 ? list2.next : null;
  }
  node.next = carry ? new ListNode(carry) : null;
  return head.next;
}

module.exports = {addTwo, ListNode};
