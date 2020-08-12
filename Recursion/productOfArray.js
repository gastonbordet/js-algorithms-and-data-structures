const productOfArray = (arr) =>
  arr.length === 1
    ? arr[0]
    : arr[arr.length - 1] * productOfArray(arr.splice(0, arr.length - 1));

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
