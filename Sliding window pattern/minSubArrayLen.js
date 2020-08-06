const minSubArrayLen = (arr, num) => {
  let minSubArr = [];
  let tempSum = arr[0];
  let i = 0;
  let j = 1;
  if (arr.length < 1) return 0;

  while (i < arr.length) {
    if (tempSum >= num) {
      let newSubArr = arr.slice(i, j);

      if (minSubArr.length === 0) {
        minSubArr = newSubArr;
      } else if (newSubArr.length <= minSubArr.length) {
        minSubArr = newSubArr;
      }

      i++;
      j = i + 1;
      tempSum = arr[i];
    } else {
      if (j >= arr.length) {
        i++;
        j = i + 1;
        tempSum = arr[i];
      } else {
        tempSum += arr[j];
        j++;
      }
    }
  }

  return minSubArr.length;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> [4, 3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> [5, 4]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> [62]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
