const LinkedListNode = require("./linkedlist");

// NthNode.js
// Function to get the Nth node from the end of the linked list

function getNthFromEnd(linkedList, n) {
  if (n <= 0 || n > linkedList.size) {
    return null;
  }

  let fast = linkedList.head;
  let slow = linkedList.head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// Alternative approach using two-pointer technique
function removeNthFromEndTwoPointer(linkedList, n) {
  if (n <= 0 || n > linkedList.size || !linkedList.head) {
    return null;
  }

  // Dummy *node* (plain object, not LinkedListNode)
  const dummy = { value: 0, next: linkedList.head };

  let fast = dummy;
  let slow = dummy;

  // Move fast n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from end
  const removedNode = slow.next;
  slow.next = slow.next.next;

  // Update head if needed
  linkedList.head = dummy.next;

  // Update tail if needed
  if (!removedNode.next) {
    linkedList.tail = slow === dummy ? null : slow;
  }

  linkedList.size--;

  return removedNode;
}

// Example usage:
const linkedList = new LinkedListNode();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.print();
// const nthNode = getNthFromEnd(linkedList, 2); // Should return the node with value 20
const nthNode = removeNthFromEndTwoPointer(linkedList, 2); // Should return the node with value 20
console.log(nthNode ? nthNode.value : null);
