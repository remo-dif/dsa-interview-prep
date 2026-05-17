// linkedliststack.js
const LinkedList = require("./linkedlist");

// Implementation of a stack using a linked list
class LinkedListStack {
  // Stack structure using linked list
  constructor() {
    this.list = new LinkedList();
  }

  // Push a value onto the stack
  push(value) {
    this.list.prepend(value);
  }

  // Pop a value off the stack
  pop() {
    return this.list.removeFromFront();
  }

  // Peek at the top value of the stack without removing it
  peek() {
    return this.list.head ? this.list.head.value : null;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.list.isEmpty();
  }

  // Get the size of the stack
  getSize() {
    return this.list.getSize();
  }

  // Print the stack
  print() {
    this.list.print();
  }
}

// Example usage:
const stack = new LinkedListStack();
console.log("Is stack empty?", stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
