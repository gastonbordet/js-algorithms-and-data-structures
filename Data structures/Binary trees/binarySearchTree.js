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

  bfs() {
    let queue = [];
    let values = [];
    let currentNode;

    if (!this.root) return nodes;

    queue.push(this.root);

    while (queue.length > 0) {
      currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      values.push(currentNode.value);
    }

    return values;
  }

  dfsPreOrder() {
    let data = [];

    if (!this.root) return nodes;

    function traverse(node, data) {
      data.push(node.value);

      if (node.left) traverse(node.left, data);
      if (node.right) traverse(node.right, data);
    }

    traverse(this.root, data);
    return data;
  }

  dfsPostOrder() {
    let data = [];

    if (!this.root) return nodes;

    function traverse(node, data) {
      if (node.left) traverse(node.left, data);
      if (node.right) traverse(node.right, data);
      data.push(node.value);
    }

    traverse(this.root, data);
    return data;
  }

  dfsInOrder() {
    let data = [];

    if (!this.root) return nodes;

    function traverse(node, data) {
      if (node.left) traverse(node.left, data);
      data.push(node.value);
      if (node.right) traverse(node.right, data);
    }

    traverse(this.root, data);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//console.log(tree.bfs()); // [10, 6, 15, 3, 8, 20]
//console.log(tree.dfsPreOrder()); // [10, 6, 3, 8, 15, 20]
//console.log(tree.dfsPostOrder()); // [3, 8, 6, 20, 15, 10]
console.log(tree.dfsInOrder()); // [3, 6, 8, 10, 15, 20]
