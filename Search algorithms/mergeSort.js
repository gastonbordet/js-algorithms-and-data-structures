function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    }

    if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    arr1.slice(i, arr1.length).forEach((x) => result.push(x));
  }

  if (j < arr2.length) {
    arr2.slice(j, arr2.length).forEach((x) => result.push(x));
  }

  return result;
}
console.log(merge([1, 5], [3])); // 1,3,5
console.log(merge([1, 4, 5], [2, 3, 6, 7, 9])); // 1,2,3,4,5,6,7,9
console.log(merge([2, 3, 6, 7, 9], [1, 4, 5])); // 1,2,3,4,5,6,7,9
console.log(merge([2, 3, 6, 7, 7, 9], [1, 4, 5])); // 1,2,3,4,5,6,7,7,9
