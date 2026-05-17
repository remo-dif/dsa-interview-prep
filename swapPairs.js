// swapPairs.js

// Function to swap every two adjacent nodes in a linked list
function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }
    
    const newHead = head.next;
    let prev = null;
    let curr = head;
    while (curr && curr.next) {
        const nextPair = curr.next.next;
        const second = curr.next;

        // Swap the pair
        second.next = curr;
        curr.next = nextPair;
        if (prev) {
            prev.next = second;
        }
        prev = curr;
        curr = nextPair;
    }
    return newHead;
};

// Complexity Analysis
// Time Complexity: O(N), where N is the number of nodes in the linked list.
// Space Complexity: O(1) since we are swapping the nodes in place.

// Recursive approach
function swapPairsRecursive(head) {
    if (!head || !head.next) {
        return head;
    }

    const newHead = head.next;
    head.next = swapPairsRecursive(newHead.next);
    newHead.next = head;
    return newHead;
};

// Complexity Analysis
// Time Complexity: O(N), where N is the number of nodes in the linked list.
// Space Complexity: O(1) for the iterative approach and O(N) for the recursive approach due to call stack.