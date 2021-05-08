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

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
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
maxBinaryHeap.insert(1);
maxBinaryHeap.insert(45);
maxBinaryHeap.insert(199);
maxBinaryHeap.print();
