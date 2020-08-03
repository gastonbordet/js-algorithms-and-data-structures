const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let obj1 = createObject(str1);

  for (let c of str2) {
    if (!obj1[c]) return false;

    obj1[c] -= 1;
  }

  return true;
};

const createObject = (str) => {
  let obj = {};
  for (let c of str) {
    obj[c] = (obj[c] || 0) + 1;
  }

  return obj;
};

console.log(validAnagram("", "")); // True
console.log(validAnagram("aaz", "zza")); // False
console.log(validAnagram("anagram", "nagaram")); // True
console.log(validAnagram("rat", "car")); // False
console.log(validAnagram("awesome", "awesom")); // False
console.log(validAnagram("qwerty", "qeywrt")); // True
console.log(validAnagram("texttwisttime", "timetwisttext")); // True
