class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  #head = null;
  #size = 0;

  append(data) {
    const newNode = new LinkedListNode(data);
    if (!this.#head) {
      this.#head = newNode;
    } else {
      let current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.#size++;
  }

  prepend(data) {
    this.#head = new LinkedListNode(data, this.#head);
    this.#size++;
  }

  insert(data, position) {
    if (position < 0 || position > this.#size) {
      return false;
    }
    if (position === 0) {
      this.prepend(data);
      return true;
    }

    const newNode = new LinkedListNode(data);
    let previous = this.#head;
    for (let index = 0; index < position - 1; index++) {
      previous = previous.next;
    }
    newNode.next = previous.next;
    previous.next = newNode;
    this.#size++;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position >= this.#size) {
      return undefined;
    }

    let current = this.#head;
    if (position === 0) {
      this.#head = current.next;
    } else {
      let previous;
      for (let index = 0; index < position; index++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.#size--;
    return current.data;
  }

  remove(data, equalsFn = (a, b) => a === b) {
    const index = this.indexOf(data, equalsFn);
    return index === -1 ? undefined : this.removeAt(index);
  }

  indexOf(data, equalsFn = (a, b) => a === b) {
    let current = this.#head;
    let index = 0;
    while (current) {
      if (equalsFn(current.data, data)) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  getElementAt(position) {
    if (position < 0 || position >= this.#size) {
      return undefined;
    }
    let current = this.#head;
    for (let index = 0; index < position; index++) {
      current = current.next;
    }
    return current;
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#head = null;
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  getSize() {
    return this.size;
  }

  get head() {
    return this.#head;
  }

  forEach(callback) {
    let current = this.#head;
    let index = 0;
    while (current) {
      callback(current.data, index);
      current = current.next;
      index++;
    }
  }

  toArray() {
    const result = [];
    this.forEach((data) => result.push(data));
    return result;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    return this.toArray()
      .map((data) => (typeof data === "object" && data !== null ? JSON.stringify(data) : String(data)))
      .join(", ");
  }

  print() {
    console.log(this.toString());
  }

  reverse() {
    let current = this.#head;
    let previous = null;
    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.#head = previous;
  }
}

module.exports = LinkedList;
module.exports.LinkedListNode = LinkedListNode;

if (require.main === module) {
  const list = new LinkedList();
  list.append(15);
  list.append(10);
  list.prepend(20);
  console.log(list.toString());
}
