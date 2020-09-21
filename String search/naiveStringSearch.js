function basicStringSearch(str, word) {
  let j = 0;
  let checksLeft = word.length;
  let matches = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === word[j]) {
      j++;
      checksLeft--;
    } else {
      j = 0;
      checksLeft = word.length;
    }

    if (checksLeft === 0) {
      matches++;
    }
  }

  return matches;
}

function ImprovedbasicStringSearch(str, word) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== str[i + j]) break;

      if (j === word.length - 1) count++;
    }
  }

  return count;
}

// Should return count of matches
console.log(ImprovedbasicStringSearch("womwoomgzomg", "omg")); // 2
console.log(ImprovedbasicStringSearch("wogwomegomgzomg", "omg")); // 2
console.log(ImprovedbasicStringSearch("lorie lolredlolied lolrd", "lolr")); // 2
console.log(ImprovedbasicStringSearch("lorie loled", "lolr")); // 0
