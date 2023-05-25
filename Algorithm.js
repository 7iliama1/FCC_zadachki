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

__________________________________________________________________________________________________________________________________
                                                        // 6. Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
decisión:

function smallestCommons(arr) {
  // Create a range array containing all the numbers in the given range
  const range = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    range.push(i);
  }

  // Function to find the greatest common divisor (GCD) of two numbers
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Function to find the least common multiple (LCM) of two numbers
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Initialize lcmValue to the first number in the range
  let lcmValue = range[0];

  // Calculate the LCM of lcmValue and each subsequent number in the range
  for (let i = 1; i < range.length; i++) {
    lcmValue = lcm(lcmValue, range[i]);
  }

  return lcmValue;
}


smallestCommons([1,5]);


_____________________________________________________________________________________________________________________________________
                                                           // 7. Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
decisión:

function dropElements(arr, func) {
  // Find the index of the first element that satisfies the condition
  const index = arr.findIndex(func);

  // If no element satisfies the condition, return an empty array
  if (index === -1) {
    return [];
  }

  // Otherwise, return the remaining elements from the index onwards
  return arr.slice(index);
}


dropElements([1, 2, 3], function(n) {return n < 3; });
