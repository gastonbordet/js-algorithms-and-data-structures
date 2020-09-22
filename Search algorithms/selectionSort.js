function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }
  }
  return arr;
}

console.log(selectionSort([1, 4, 3, 9, 6, 12, 5])); // 1,3,4,5,6,9,12
console.log(selectionSort([34, 22, 10, 19, 17])); // 10, 17, 19, 22, 34
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17])); // 0, 2, 10, 17, 19, 22, 34
