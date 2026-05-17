/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function deleteDuplicates(head) {
  const listMap = new Map();
  let current = head;

  // Count occurrences
  while (current) {
    listMap.set(current.val, (listMap.get(current.val) || 0) + 1);
    current = current.next;
  }

  // Build result list with only unique values
  const dummyHead = new ListNode(0);
  current = dummyHead;

  let node = head;
  while (node) {
    if (listMap.get(node.val) === 1) {
      current.next = new ListNode(node.val);
      current = current.next;
    }
    node = node.next;
  }

  return dummyHead.next;
}

module.exports = {
  ListNode,
  deleteDuplicates,
};
