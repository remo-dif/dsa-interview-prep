const Comparator = require("./comparator");

class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  #root = null;
  #compare;

  constructor(compareFn = Comparator.defaultCompareFn) {
    this.#compare = new Comparator(compareFn);
  }

  get root() {
    return this.#root;
  }

  insert(data) {
    if (!this.#root) {
      this.#root = new BSTNode(data);
    } else {
      this.#insertNode(data, this.#root);
    }
  }

  #insertNode(data, currentNode) {
    if (this.#compare.lessThan(data, currentNode.data)) {
      if (!currentNode.left) {
        currentNode.left = new BSTNode(data);
      } else {
        this.#insertNode(data, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new BSTNode(data);
      } else {
        this.#insertNode(data, currentNode.right);
      }
    }
  }

  search(data) {
    return this.#searchNode(data, this.#root);
  }

  #searchNode(data, currentNode) {
    if (!currentNode) {
      return false;
    }
    if (this.#compare.equal(data, currentNode.data)) {
      return true;
    }
    if (this.#compare.lessThan(data, currentNode.data)) {
      return this.#searchNode(data, currentNode.left);
    } else {
      return this.#searchNode(data, currentNode.right);
    }
  }

  remove(data) {
    this.#root = this.#removeNode(data, this.#root);
  }

  delete(data) {
    this.remove(data);
  }

  #removeNode(data, currentNode) {
    if (!currentNode) {
      return null;
    }

    if (this.#compare.lessThan(data, currentNode.data)) {
      currentNode.left = this.#removeNode(data, currentNode.left);
      return currentNode;
    } else if (this.#compare.greaterThan(data, currentNode.data)) {
      currentNode.right = this.#removeNode(data, currentNode.right);
      return currentNode;
    } else {
      if (!currentNode.left && !currentNode.right) {
        return null;
      }
      if (!currentNode.left) {
        return currentNode.right;
      }
      if (!currentNode.right) {
        return currentNode.left;
      }

      const minNode = this.#findMinNode(currentNode.right);
      currentNode.data = minNode.data;
      currentNode.right = this.#removeNode(minNode.data, currentNode.right);
      return currentNode;
    }
  }

  min() {
    return this.#root ? this.#findMinNode(this.#root).data : null;
  }

  minValueNode(node = this.#root) {
    return node ? this.#findMinNode(node).data : null;
  }

  #findMinNode(node) {
    return node.left ? this.#findMinNode(node.left) : node;
  }

  max() {
    return this.#root ? this.#findMaxNode(this.#root).data : null;
  }

  maxValueNode(node = this.#root) {
    return node ? this.#findMaxNode(node).data : null;
  }

  #findMaxNode(node) {
    return node.right ? this.#findMaxNode(node.right) : node;
  }

  inOrderTraverse(callback) {
    this.#inOrderTraverseNode(this.#root, callback);
  }

  #inOrderTraverseNode(node, callback) {
    if (node) {
      this.#inOrderTraverseNode(node.left, callback);
      callback(node.data);
      this.#inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.#preOrderTraverseNode(this.#root, callback);
  }

  #preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node.data);
      this.#preOrderTraverseNode(node.left, callback);
      this.#preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.#postOrderTraverseNode(this.#root, callback);
  }

  #postOrderTraverseNode(node, callback) {
    if (node) {
      this.#postOrderTraverseNode(node.left, callback);
      this.#postOrderTraverseNode(node.right, callback);
      callback(node.data);
    }
  }

  levelOrderTraverse(callback) {
    const queue = [];
    if (this.#root) {
      queue.push(this.#root);
    }
    while (queue.length) {
      const currentNode = queue.shift();
      callback(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  isEmpty() {
    return !this.#root;
  }

  inOrder(root = this.#root) {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      result.push(node.data);
      traverse(node.right);
    };
    traverse(root);
    return result;
  }

  preOrder(root = this.#root) {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(root);
    return result;
  }

  levelOrder() {
    const result = [];
    this.levelOrderTraverse((data) => result.push(data));
    return result;
  }
}

module.exports = BinarySearchTree;
module.exports.BSTNode = BSTNode;

if (require.main === module) {
  const bst = new BinarySearchTree();
  [15, 10, 20, 8, 12, 17, 25].forEach((value) => bst.insert(value));
  console.log(bst.inOrder().join(", "));
  console.log(bst.search(10));
  console.log(bst.min());
  console.log(bst.max());
  console.log(bst.levelOrder().join(", "));
}
