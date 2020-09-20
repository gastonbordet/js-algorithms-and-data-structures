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

// Should return count of matches
console.log(basicStringSearch("wowomgzomg", "omg")); // 2
console.log(basicStringSearch("wogwomegomgzomg", "omg")); // 2
console.log(basicStringSearch("lorie lolredlolied lolrd", "lolr")); // 2
console.log(basicStringSearch("lorie loled", "lolr")); // 0
