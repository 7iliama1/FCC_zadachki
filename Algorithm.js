// 1. Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


decisión:

function fearNotLetter(str) {
  // Get the character code of the first letter in the range
  const startCode = str[0].charCodeAt(0);

  // Iterate over the range and check for the missing letter
  for (let i = 0; i < str.length; i++) {
    // Get the expected character code based on the position in the range
    const expectedCode = startCode + i;

    // If the current letter does not match the expected character, return the missing letter
    if (str.charCodeAt(i) !== expectedCode) {
      return String.fromCharCode(expectedCode);
    }
  }

  // If all letters are present, return undefined
  return undefined;
}


fearNotLetter("abce");



// 2. Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.

decisión:

function uniteUnique(...arr) {
  // Concatenate all arrays into a single array
  const flattArr = [].concat(...arr);

  // Create a new Set to store unique values
  const uniqueSet = new Set();

  // Iterate over the flattened array and add unique values to the Set
  for (const value of flattArr) {
    uniqueSet.add(value);
  }

  // Convert the Set back to an array and return it
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
