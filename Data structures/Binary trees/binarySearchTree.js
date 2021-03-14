class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = function (value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return this;
      // check if newNode.value is less
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        // newNode.value must be bigger
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  };

  contains(searchedValue) {
    if (!this.root) return false;

    let currentNode = this.root;
    let found = false;

    while (currentNode && !found) {
      if (searchedValue === currentNode.value) found = true;
      if (searchedValue < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return found;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(1);

console.log(tree.contains(10));
console.log(tree.contains(8));
console.log(tree.contains(13));
console.log(tree.contains(3));
console.log(tree.contains(7));
console.log(tree.contains(26));
