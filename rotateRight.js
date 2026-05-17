// rotateRight.js

// Function to rotate the linked list to the right by k places
function rotateRight(head, k) {
    if (!head || k <= 0) {
        return head;
    }

    // First, determine the length of the linked list
    let length = 1;
    let tail = head;   
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Make the linked list circular
    tail.next = head;   
    k = k % length;
    let stepsToNewHead = length - k;

    // Find the new tail and new head
    let newTail = tail;
    while (stepsToNewHead > 0) {
        newTail = newTail.next;
        stepsToNewHead--;
    }
    const newHead = newTail.next;
    newTail.next = null; // Break the circle

    return newHead;
}

module.exports = rotateRight;
