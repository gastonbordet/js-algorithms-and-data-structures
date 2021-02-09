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

    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode;
  }
}

const list = new SinglyLinkedList();
list.push("hi");
list.push("there");
list.push("friend!");
list.shift();
list.traverse();
