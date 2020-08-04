const sameFrecuency = (a, b) => {
  let first = JSON.stringify(a);
  let second = JSON.stringify(b);

  if (first.length !== second.length) return false;

  let obj = createObjectOfString(first);

  for (let c of second) {
    if (!obj[c]) return false;

    obj[c] -= 1;
  }

  return true;
};

const createObjectOfString = (string) => {
  let obj = {};

  for (let c of string) {
    obj[c] = (obj[c] || 0) + 1;
  }

  return obj;
};

console.log(sameFrecuency(182, 281)); // true
console.log(sameFrecuency(34, 14)); // false
console.log(sameFrecuency(3589578, 5879385)); // true
console.log(sameFrecuency(22, 222)); // false
