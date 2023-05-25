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


__________________________________________________________________________________________________________________________________________
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



_____________________________________________________________________________________________________________________________
// 3. Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
decisión:

function convertHTML(str) {
  // Create an object to map the characters to their corresponding entities
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Use a regular expression to match the characters and replace them with their entities
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}


convertHTML("Dolce & Gabbana");


____________________________________________________________________________________________________________________________
// 4. Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
    //The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
    //For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
decisión:

function sumFibs(num) {
  let sum = 0;
  let prevNum = 0;
  let currNum = 1;

  // Continue looping until the current Fibonacci number exceeds num
  while (currNum <= num) {
    // If the current Fibonacci number is odd, add it to the sum
    if (currNum % 2 !== 0) {
      sum += currNum;
    }

    // Calculate the next Fibonacci number
    const nextNum = prevNum + currNum;

    // Update the previous and current Fibonacci numbers
    prevNum = currNum;
    currNum = nextNum;
  }

  // Return the sum of odd Fibonacci numbers
  return sum;
}
sumFibs(4);

_________________________________________________________________________________________________________________________________
                                                           // 5. Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
decisión:

function sumPrimes(num) {
  let sum = 0;

  // Function to check if a number is prime
  function isPrime(number) {
    if (number < 2) {
      return false;
    }

    // Iterate from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // If the number is divisible by i, it's not prime
      if (number % i === 0) {
        return false;
      }
    }

    // If no divisors found, the number is prime
    return true;
  }

  // Iterate through numbers from 2 to num
  for (let i = 2; i <= num; i++) {
    // Check if the number is prime using the isPrime function
    if (isPrime(i)) {
      // If the number is prime, add it to the sum
      sum += i;
    }
  }

  // Return the sum of prime numbers
  return sum;
}


sumPrimes(10);



