function swap(arr, index, value1, value2) {
  arr[index] = value2;
  arr[index + 1] = value1;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, arr[j], arr[j + 1]);
    }
  }

  return arr;
}

function optimizedBubbleSort(arr) {
  // This variable eliminates useless loop after sorting it's done
  var noSwapped;
  for (let i = arr.length; i > 0; i--) {
    noSwapped = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, arr[j], arr[j + 1]);
        noSwapped = false;
      }
    }

    if (noSwapped) break;
  }

  return arr;
}

console.log(bubbleSort([1, 4, 3, 9, 6, 12, 5])); // 1,3,4,5,6,9,12
console.log(optimizedBubbleSort([1, 4, 3, 9, 6, 12, 5])); // 1,3,4,5,6,9,12
