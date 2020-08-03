const { PerformanceObserver, performance } = require("perf_hooks");

const countUniqueValues1 = (numbers) => {
  let left = 0;

  if (numbers.length < 1) return 0;

  let counter = 1;

  while (left < numbers.length - 1) {
    if (numbers[left] !== numbers[left + 1]) {
      counter += 1;
    }
    left += 1;
  }
  return counter;
};

const countUniqueValues2 = (numbers) => {
  let left = 0;
  let right = 1;

  if (numbers.length < 1) return 0;

  while (right <= numbers.length) {
    if (numbers[left] === numbers[right]) {
      right += 1;
    } else {
      left += 1;
      numbers[left] = numbers[right];
      right += 1;
    }
  }

  return left;
};

const countUniqueValues3 = (numbers) => {
  if (numbers.length < 1) return 0;

  let i = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] !== numbers[j]) {
      i++;
      numbers[i] = numbers[j];
    }
  }

  return i + 1;
};

var t0 = performance.now();
console.log(countUniqueValues1([1, 1, 1, 1, 1])); // 1
console.log(countUniqueValues1([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues1([])); // 0
console.log(countUniqueValues1([-2, -1, -1, 0, 1])); // 4
var t1 = performance.now();
console.log("Call to countUniqueValues1 took " + (t1 - t0) + " milliseconds.");

var t0 = performance.now();
console.log(countUniqueValues2([1, 1, 1, 1, 1])); // 1
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues2([])); // 0
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); // 4
var t1 = performance.now();
console.log("Call to countUniqueValues2 took " + (t1 - t0) + " milliseconds.");

var t0 = performance.now();
console.log(countUniqueValues3([1, 1, 1, 1, 1])); // 1
console.log(countUniqueValues3([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues3([])); // 0
console.log(countUniqueValues3([-2, -1, -1, 0, 1])); // 4
var t1 = performance.now();
console.log("Call to countUniqueValues2 took " + (t1 - t0) + " milliseconds.");
