/**
 * LeetCode 142: Linked List Cycle II
 *
 * Return the node where the cycle begins. If there is no cycle, return null.
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function detectCycle(head) {
  const visited = new Set();
  let current = head;

  while (current) {
    if (visited.has(current)) {
      return current;
    }

    visited.add(current);
    current = current.next;
  }

  return null;
}

module.exports = {
  ListNode,
  detectCycle,
};

if (require.main === module) {
  const head = new ListNode(3);
  const node2 = new ListNode(2);
  const node0 = new ListNode(0);
  const node4 = new ListNode(-4);

  head.next = node2;
  node2.next = node0;
  node0.next = node4;
  node4.next = node2;

  console.log(detectCycle(head)?.val); // Output: 2
}
