class Queue {
  #items = [];

  enqueue(item) {
    this.#items.push(item);
  }

  dequeue() {
    return this.#items.shift();
  }

  front() {
    return this.#items[0];
  }

  peek() {
    return this.front();
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  get size() {
    return this.#items.length;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.#items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return "Empty Queue";
    }
    return this.#items
      .map((item) => (typeof item === "object" && item !== null ? JSON.stringify(item) : String(item)))
      .join(", ");
  }

  print() {
    console.log(this.toString());
  }
}

module.exports = Queue;

if (require.main === module) {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.toString());
  console.log(queue.dequeue());
}
