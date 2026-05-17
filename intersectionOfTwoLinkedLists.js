/**
 * LeetCode 160: Intersection of Two Linked Lists
 *
 * Return the node where the two linked lists intersect. If they do not
 * intersect, return null.
 */
const { LinkedListNode } = require('./linkedlist');

function getIntersectionNodeWithSet(headA, headB) {
  const visited = new Set();
  let current = headA;

  while (current) {
    visited.add(current);
    current = current.next;
  }

  current = headB;
  while (current) {
    if (visited.has(current)) {
      return current;
    }
    current = current.next;
  }

  return null;
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}

module.exports = {
  getIntersectionNode,
  getIntersectionNodeWithSet,
};

if (require.main === module) {
  const shared = new LinkedListNode(8, new LinkedListNode(4, new LinkedListNode(5)));
  const headA = new LinkedListNode(4, new LinkedListNode(1, shared));
  const headB = new LinkedListNode(5, new LinkedListNode(6, new LinkedListNode(1, shared)));

  console.log(getIntersectionNodeWithSet(headA, headB)?.data); // Output: 8
  console.log(getIntersectionNode(headA, headB)?.data); // Output: 8
}

