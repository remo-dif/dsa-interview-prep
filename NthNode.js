function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function getNthFromEnd(head, n) {
  if (n <= 0 || !head) {
    return null;
  }

  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    if (!fast) {
      return null;
    }
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

function removeNthFromEndTwoPointer(head, n) {
  const dummy = new ListNode(0, head);

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    if (!fast) {
      return head;
    }
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}

function toArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

module.exports = {
  ListNode,
  getNthFromEnd,
  removeNthFromEndTwoPointer,
};

if (require.main === module) {
  const head = new ListNode(10, new ListNode(20, new ListNode(30, new ListNode(40))));
  console.log(getNthFromEnd(head, 2)?.val); // Output: 30
  console.log(toArray(removeNthFromEndTwoPointer(head, 2))); // Output: [10, 20, 40]
}
