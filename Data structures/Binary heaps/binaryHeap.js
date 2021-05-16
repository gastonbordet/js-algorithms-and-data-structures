class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  print() {
    this.values.map((v) => console.log(v));
  }

  bubbleUp() {
    let valueIndex = this.values.length - 1;
    let parentIndex = Math.floor((valueIndex - 1) / 2);

    while (parentIndex > -1) {
      // check if new value is bigger than parent
      if (this.values[valueIndex] > this.values[parentIndex]) {
        let aux = this.values[valueIndex];
        // swap values
        this.values[valueIndex] = this.values[parentIndex];
        this.values[parentIndex] = aux;
      }
      // change index
      valueIndex = parentIndex;
      parentIndex = Math.floor((valueIndex - 1) / 2);
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
        // check if children left is bigger than current value
        if (childrenLeft > value) {
          swap = childrenLeftIndex;
        }
      }

      // check if children left index is inside of the array length
      if (childrenRightIndex < length) {
        childrenRight = this.values[childrenRightIndex];
        // check if
        // - swap is null because children left was smaller than current value
        // - or swap isn't null, children left was bigger than current value BUT children right is bigger than children left
        if (
          (swap === null && childrenRight > value) ||
          (swap !== null && childrenRight > childrenLeft)
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

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  extractMax() {
    const maxValue = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values.pop();
      this.bubbleDown();
    }
    return maxValue;
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
//maxBinaryHeap.insert(1);
//maxBinaryHeap.insert(45);
//maxBinaryHeap.insert(199);
maxBinaryHeap.extractMax();
maxBinaryHeap.print();
