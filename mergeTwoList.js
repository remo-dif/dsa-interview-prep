// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

module.exports = mergeTwoLists;

// Complexity Analysis
// Time Complexity: O(n + m), where n and m are the lengths of the two linked lists.
// Space Complexity: O(n + m) in the worst case due to the recursion stack.