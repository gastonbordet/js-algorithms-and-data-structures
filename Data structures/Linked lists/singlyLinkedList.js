class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    // if this is the first node, head and tail should be the new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // Otherwise, current tail should point to the new node and then replace the current tail with the new one
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  traverse() {
    // Loop through all nodes
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    // If there isn't any node yet return undefined
    if (!this.head) return undefined;

    // Loop through all nodes until reach the last one
    let last = this.head;
    let preLast = last;
    while (last.next) {
      preLast = last;
      last = last.next;
    }

    this.tail = preLast;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return last;
  }

  shift() {
    if (!this.head) return undefined;

    // Remove first node
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    // Add a new node as first
    if (!this.head) {
      this.push(newNode);
    } else {
      newNode.next = this.head;
      this.head = newNode;

      this.length++;
    }

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    // Returns node at given index
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    // update value of specific node
    let currentNode = this.get(index);

    if (!currentNode) {
      return false;
    }

    currentNode.val = val;

    return true;
  }

  insert(index, val) {
    // insert new node at specific position, if it's a the beggning or end use class methods
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.push(val) ? true : false;
    if (index === 0) return this.unshift(val) ? true : false;

    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    // remove node at specific position, if it's a the beggning or end use class methods
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let selectedNode = previousNode.next;
    previousNode.next = selectedNode.next;

    this.length--;
    return selectedNode;
  }

  reverse() {
    if (!this.head && !this.tail) return;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null; // Use this var to store next value of node
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.reverse();
list.traverse();
