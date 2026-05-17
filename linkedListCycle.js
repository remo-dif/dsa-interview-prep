/**
 * LeetCode 142: Linked List Cycle II
 *
 * Return the node where the cycle begins. If there is no cycle, return null.
 */
const { LinkedListNode } = require('./linkedlist');

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
  detectCycle,
};

if (require.main === module) {
  const head = new LinkedListNode(3);
  const node2 = new LinkedListNode(2);
  const node0 = new LinkedListNode(0);
  const node4 = new LinkedListNode(-4);

  head.next = node2;
  node2.next = node0;
  node0.next = node4;
  node4.next = node2;

  console.log(detectCycle(head)?.data); // Output: 2
}
