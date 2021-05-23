class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority; // Smaller number means higher priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // if element priority is less or equal to parent priority break
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let valueIndex = 0;
    const length = this.values.length;
    const value = this.values[0];

    while (true) {
      let childrenLeftIndex = 2 * valueIndex + 1;
      let childrenRightIndex = 2 * valueIndex + 2;
      let childrenLeft, childrenRight;
      let swap = null; // this variable will store the index of the element to swap

      // check if children left index is inside of the array length
      if (childrenLeftIndex < length) {
        childrenLeft = this.values[childrenLeftIndex];
        // check if children left priority is higher than current value
        if (childrenLeft.priority < value.priority) {
          swap = childrenLeftIndex;
        }
      }

      // check if children left index is inside of the array length
      if (childrenRightIndex < length) {
        childrenRight = this.values[childrenRightIndex];
        // check if
        // - swap is null because children left priority was lesser than current value
        // - or swap isn't null, children left priority was higher than current value BUT children right priority is higher than children left
        if (
          (swap === null && childrenRight.priority < value.priority) ||
          (swap !== null && childrenRight.priority < childrenLeft.priority)
        ) {
          swap = childrenRightIndex;
        }
      }

      if (swap === null) break;
      this.values[valueIndex] = this.values[swap];
      this.values[swap] = value;

      valueIndex = swap;
      //value = this.values[valueIndex];
    }
  }

  Print() {
    this.values.forEach((v) => console.log(v));
    console.log("");
  }

  Enqueue(value = 0, priority = 3) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  Dequeue() {
    const maxPriority = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values.pop();
      this.bubbleDown();
    }
    return maxPriority;
  }
}

let ER = new PriorityQueue();
ER.Enqueue("common cold", 5);
ER.Enqueue("gunshot wound", 1);
ER.Enqueue("high fever", 4);
ER.Enqueue("broken arm", 2);
ER.Enqueue("glass in foot", 3);

ER.Print();

ER.Dequeue();

ER.Print();
