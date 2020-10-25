function swap(arr, i, j) {
  const aux = arr[i];
  arr[i] = arr[j];
  arr[j] = aux;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  // Select our pivot, will be first element
  const pivot = arr[start];
  let index = start;
  // Loop all over array
  for (let i = start + 1; i <= end; i++) {
    // check how many elements are smaller than the pivot
    if (pivot > arr[i]) {
      index++;
      swap(arr, index, i);
    }
  }

  swap(arr, start, index);
  // return index
  return index;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // Sort left side
    quicksort(arr, left, pivotIndex - 1);

    // Sort right side
    quicksort(arr, pivotIndex + 1, right);
  }

  return arr;
}

//console.log(quicksort([5, 2, 1, 8, 4, 7, 6, 3])); // 4, index where pivot will be placed
console.log(quicksort([4, 8, 2, 1, 5, 7, 6, 3])); // 3, index where pivot will be placed
console.log(quicksort([4, 6, 9, 1, 2, 5, 3])); // 3, index where pivot will be placed
