function swap(arr, i, j) {
  const aux = arr[i];
  arr[i] = arr[j];
  arr[j] = aux;
}

function pivot(arr) {
  // Select our pivot, will be first element
  const pivot = arr[0];
  let index = 0;
  // Loop all over array
  for (let i = 1; i < arr.length; i++) {
    // check how many elements are smaller than the pivot
    if (pivot > arr[i]) {
      index++;
      swap(arr, index, i);
    }
  }

  swap(arr, index, 0);
  // return index
  return index;
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3])); // 4, index where pivot will be placed
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3, index where pivot will be placed
