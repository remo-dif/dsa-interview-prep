// linkedlist.js

// Implementation of a singly linked list
class LinkedListNode {
  // Node structure for linked list
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the linked list
  getSize() {
    return this.size;
  }

  // Print the linked list
  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
  }

  // Append a new value to the end of the linked list
  append(value) {
    const newNode = { value: value, next: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Prepend a new value to the start of the linked list
  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }

  // Find a node by its value
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Remove a node from the front of the linked list
  removeFromFront() {
    if (!this.head) {
      return null;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return removedNode;
  }

  // Remove a node from the end of the linked list
  removeFromEnd() {
    if (!this.head) {
      return null;
    }
    if (this.size === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedNode;
    }
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    const removedNode = this.tail;
    this.tail = currentNode;
    this.tail.next = null;
    this.size--;
    return removedNode;
  }
}

module.exports = LinkedListNode;
