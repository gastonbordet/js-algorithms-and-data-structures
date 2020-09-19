function binarySearch(arr, value) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  while (arr[middlePointer] !== value && leftPointer <= rightPointer) {
    if (value > arr[middlePointer]) leftPointer = middlePointer + 1;
    else if (value < arr[middlePointer]) rightPointer = middlePointer - 1;

    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }

  return arr[middlePointer] === value ? middlePointer : -1;
}

// Should return index of value in arr or -1 if it doesn't exist.
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    10
  )
); // 2
