// Get digit of a specific position inside a number from right to left, if the position doesn't exist in the number returns 0
function getDigit(number, place) {
  // turns the number into string to manipulate char positions
  stringNumber = number.toString();

  // Returns 0 if the number is smaller than the position wanted
  if (place > stringNumber.length) {
    return 0;
  }

  // Turns the position wanted backwars so you can read the string from end to beginning
  positionInString = stringNumber.length - place - 1;
  return Number(stringNumber.charAt(positionInString));
}

// Get digit of a specific position inside a number from right to left, if the position doesn't exist in the number returns 0
function getDigit2(number, i) {
  return Math.floor((Math.abs(number) / Math.pow(10, i)) % 10);
}

// Returns number of digits in a number
function digitCount(number) {
  if (number === 0) return 1;

  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// Given a list of numbers returns the amount of digits of the bigest number
function mostDigits(numbers) {
  maxDigits = 0;

  for (let i = 0; i < numbers.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
  }

  return maxDigits;
}

// Given a list of numbers returns a copy of that list sorted
function radixSort(numbers) {
  // Get number of repitions based on max amount of digits
  const iterations = mostDigits(numbers);
  let sortedList = numbers;

  // Loop based on biggest amount of digits
  for (let k = 0; k < iterations; k++) {
    // Create 10 buckets of 9 positions to store numbers from 0-9
    let buckets = Array.from({ length: 10 }, () => []);

    // Loop over numbers
    for (let i = 0; i < sortedList.length; i++) {
      // Get specific digit of current number in loop
      let digit = getDigit2(sortedList[i], k);
      // Store number in bucket based on the value of the digit
      buckets[digit].push(sortedList[i]);
    }

    // Replace list with new numbers sorted
    sortedList = [].concat(...buckets);
  }

  return sortedList;
}

console.log(radixSort([23, 345, 5467, 10234, 12, 2345, 9852])); // 12, 23, 2345, 5467, 9852, 10234
