// sortedListToBST.js

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Find the middle node of the linked list
function findMiddle(start, end) {
  let slow = start;
  let fast = start;
  while (fast !== end && fast.next !== end) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Convert sorted linked list to height-balanced BST
function convertListToBST(start, end) {
  if (start === end) {
    return null;
  }
  const mid = findMiddle(start, end);
  const node = new TreeNode(mid.val);

  node.left = convertListToBST(start, mid);
  node.right = convertListToBST(mid.next, end);
  return node;
}

// Sorted List to BST main function
function sortedListToBST(head) {
  if (!head) {
    return null;
  }
  return convertListToBST(head, null);
}

// Complexity Analysis
// Time Complexity: O(N log N), where N is the number of nodes in the linked list.
// Space Complexity: O(log N) due to the recursion stack in a balanced BST.

module.exports = {
  TreeNode,
  sortedListToBST,
};
