const mergeTwoLists = require('./mergeTwoList');

/**
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
 */

function mergeKLists(lists) {
  if (!lists || lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }
  return lists[0];
}

// Example usage:
// const list1 = createLinkedList([1, 4, 5]);
// const list2 = createLinkedList([1, 3, 4]);
// const list3 = createLinkedList([2, 6]);
// const mergedList = mergeKLists([list1.head, list2.head, list3.head]);

// Complexity Analysis
// Time Complexity: O(N log k), where N is the total number of nodes across all lists and k is the number of lists.
// Space Complexity: O(1) if we ignore the recursion stack used in mergeTwoLists.
module.exports = mergeKLists;
