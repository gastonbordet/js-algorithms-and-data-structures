const areThereDuplicates1 = (...args) => {
  let obj = {};
  for (let x of args) {
    obj[x] = (obj[x] || 0) + 1;
  }

  for (let x of args) {
    if (obj[x] > 1) return true;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
