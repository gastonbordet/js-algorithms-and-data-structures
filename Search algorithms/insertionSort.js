function insertion(arr) {
  let totalLoop = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        let aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
        i--;
      }
      totalLoop++;
    }
  }
  console.log(totalLoop);
  return arr;
}

function insertion2(arr) {
  let totalLoop = 0;
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    let j = i - 1;
    let auxIndex = i;
    while (j >= 0) {
      if (val < arr[j]) {
        arr[auxIndex] = arr[j];
        arr[j] = val;
        auxIndex--;
      }
      j--;
      totalLoop++;
    }
  }
  console.log(totalLoop);

  return arr;
}

function insertion3(arr) {
  var totalLoop = 0;
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      totalLoop++;
    }
    arr[j + 1] = currentVal;
  }
  console.log(totalLoop);
  return arr;
}

console.log(insertion([5, 4, 2, 11, 1, 3, 10])); // 1,2,3,4,5,10,11
console.log(insertion2([5, 4, 2, 11, 1, 3, 10])); // 1,2,3,4,5,10,11
console.log(insertion3([5, 4, 2, 11, 1, 3, 10])); // 1,2,3,4,5,10,11
//console.log(insertion2([2, 1, 9, 76, 4]));
