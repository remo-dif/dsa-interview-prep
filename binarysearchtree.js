// binarysearchtree.js

// A simple implementation of a Binary Search Tree (BST) in JavaScript
class Node {
  // Node class to represent each node in the BST
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree class to manage the BST operations
class BinarySearchTreeNode {
  // BinarySearchTree class to manage the BST operations
  constructor() {
    this.root = null;
  }

  // Check if the tree is empty
  isEmpty() {
    return this.root === null;
  }

  // Insert a new value into the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node in the correct position
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    if (!this.root) {
      return false;
    } else {
      return this.searchNode(this.root, value);
    }
  }

  // Helper method to search for a value in the BST
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // Pre-order traversal of the BST
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // In-order traversal of the BST
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // Post-order traversal of the BST
  levelOrder() {
    const queue = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  // Find the minimum value in the BST
  minValueNode(node) {
    if (node.left === null) {
      return node.value;
    } else {
      return this.minValueNode(node.left);
    }
  }

  // Find the maximum value in the BST
  maxValueNode(node) {
    if (node.right === null) {
      return node.value;
    } else {
      return this.maxValueNode(node.right);
    }
  }

  // Delete a value from the BST
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // Helper method to delete a node from the BST
  deleteNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // Node with two children: Get the inorder successor (smallest in the right subtree)
      const minRight = this.minValueNode(node.right);
      node.value = minRight;
      node.right = this.deleteNode(node.right, minRight);
      return node;
    }
  }
}

// Example usage
const bst = new BinarySearchTreeNode();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);
console.log("In-order Traversal:");
bst.inOrder(bst.root);
console.log("Search for 10:", bst.search(10));
console.log("Minimum value:", bst.minValueNode(bst.root));
console.log("Maximum value:", bst.maxValueNode(bst.root));
console.log("Level-order Traversal:");
bst.levelOrder();

module.exports = BinarySearchTreeNode;
