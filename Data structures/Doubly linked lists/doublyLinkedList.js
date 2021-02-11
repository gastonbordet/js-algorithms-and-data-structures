class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(val) {
    if (this.length === 0) return this.push(val);

    let newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    // If the index is less or equal than the half of the length, start searching from the head
    if (Math.floor(index <= this.length / 2)) {
      let counter = 0;
      let node = this.head;

      while (counter !== index) {
        node = node.next;
        counter++;
        return node;
      }
    } else {
      // If the index is bigger than the half of the length, start searching from the tail
      let counter = this.length - 1;
      let node = this.tail;

      while (counter !== index) {
        node = node.prev;
        counter--;
      }
      return node;
    }
  }

  set(index, val) {
    let nodeResult = this.get(index);

    if (nodeResult) {
      nodeResult.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let foundNode = this.get(index);
    let newNode = new Node(val);

    if (foundNode) {
      let prevNode = foundNode.prev;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = foundNode;
      foundNode.prev = newNode;

      this.length++;
      return true;
    }

    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    let prevNode = foundNode.prev;
    let nextNode = foundNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return foundNode;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(100);
list.push(2);
list.push(3);
list.push(4);
list.remove(1);
list.print();
