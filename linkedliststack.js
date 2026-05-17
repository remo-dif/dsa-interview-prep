class Stack {
  #items = [];

  push(item) {
    this.#items.push(item);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
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
      return "Empty Stack";
    }
    return this.#items
      .map((item) => (typeof item === "object" && item !== null ? JSON.stringify(item) : String(item)))
      .join(", ");
  }

  print() {
    console.log(this.toString());
  }
}

module.exports = Stack;

if (require.main === module) {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.toString());
}
