// queue.js
const LinkedList = require("./linkedlist");

// Implementation of a queue using a linked list
class Queue {
  // Queue structure using linked list
  constructor() {
    this.list = new LinkedList();
  }

  // Dequeue a value from the front of the queue
  enqueue(value) {
    this.list.append(value);
  }

  // Dequeue a value from the front of the queue
  dequeue() {
    return this.list.removeFromFront();
  }

  // Peek at the front value of the queue without removing it
  peek() {
    return this.list.head ? this.list.head.value : null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.list.isEmpty();
  }

  // Get the size of the queue
  getSize() {
    return this.list.getSize();
  }

  // Print the queue
  print() {
    this.list.print();
  }
}


// Example usage:
const queue = new Queue();
console.log("Is queue empty?", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log("Dequeued:", queue.dequeue());
queue.print();

module.exports = Queue;