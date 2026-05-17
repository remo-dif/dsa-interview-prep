// ReverseKGroup.js
const LinkedListNode = require("./linkedlist");

// Function to reverse nodes of a linked list in k-groups
function reverseKGroup(head, k) {
  // Base case checks
  if (!head || k <= 1) {
    return head;
  }

  const dummy = { next: head };
  let groupPrev = dummy;
  let groupEnd = head;

  // Iterate through the list in chunks of size k
  while (true) {
    let count = 0;
    while (count < k && groupEnd) {
      groupEnd = groupEnd.next;
      count++;
    }
    if (count < k) {
      break;
    }
    let prev = groupEnd;
    let curr = groupPrev.next;
    for (let i = 0; i < k; i++) {
      const nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    const temp = groupPrev.next;
    groupPrev.next = prev;
    groupPrev = temp;
  }

  return dummy.next;
}

// Complexity Analysis
// Time Complexity: O(N), where N is the number of nodes in the linked list.
// Space Complexity: O(1) since we are reversing the nodes in place.
