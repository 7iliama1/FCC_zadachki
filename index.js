1. Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


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
