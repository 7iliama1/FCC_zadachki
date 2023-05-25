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

____________________________________________________________________________________________________________________________________
                                                         // 8. Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
decisión:

function steamrollArray(arr) {
  let flattenedArray = [];

  // Helper function to flatten the nested array
  function flattenArray(el) {
    // Check if the element is an array
    if (Array.isArray(el)) {
      // If it is an array, iterate through its elements
      for (let i = 0; i < el.length; i++) {
        // Recursively call the flattenArray function on each element
        flattenArray(el[i]);
      }
    } else {
      // If the element is not an array, push it to the flattenedArray
      flattenedArray.push(el);
    }
  }

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // Call the flattenArray function on each element
    flattenArray(arr[i]);
  }

  // Return the flattened array
  return flattenedArray;
}


steamrollArray([1, [2], [3, [[4]]]]);

_________________________________________________________________________________
                                                // 9. Binary Agents
// Return an English translated sentence of the passed binary string.
//The binary string will be space separated.
decisión:

function binaryAgent(str) {
  // Split the binary string into an array of binary numbers
  const binaryArray = str.split(" ");

  // Convert each binary number to its corresponding character
  const translatedArray = binaryArray.map((binary) => {
    // Convert binary to decimal using parseInt with base 2
    const decimal = parseInt(binary, 2);
    // Convert decimal to character using String.fromCharCode
    return String.fromCharCode(decimal);
  });

  // Join the translated characters into a sentence
  const translatedSentence = translatedArray.join("");

  return translatedSentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

_______________________________________________________________________________________________________________________________
                                             // 10. Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.
decisión:

function truthCheck(coll, pre) {
  // Check the truthiness of the specified property in each object
  for (let i = 0; i < coll.length; i++) {
    // If the property value is falsy or undefined, return false
    if (!coll[i][pre]) {
      return false;
    }
  }

  // All objects have truthy values for the specified property
  return true;
}


truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

______________________________________________________________________________________________________________________________
                                             // 11. Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
                        var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
decisión:

function addTogether() {
  const [first, second] = arguments;

  // Check if the first argument is a number
  if (typeof first === "number") {
    // If the second argument is also a number, return their sum
    if (typeof second === "number") {
      return first + second;
    }
    // If only one argument is provided, return a function that expects the second argument
    if (arguments.length === 1) {
      return (second) => addTogether(first, second);
    }
  }
}

addTogether(2,3);

________________________________________________________________________________________________________________
                                              // 12. Make a Person
// Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. 
//These methods must be the only available means of interacting with the object.
decisión:

let Person = function (firstAndLast) {
  // Split the full name into first and last names
  let fullName = firstAndLast.split(" ");
  let firstName = fullName[0];
  let lastName = fullName[1];

  // Define getter and setter methods

  // Getter method for retrieving the first name
  this.getFirstName = function () {
    return firstName;
  };

  // Getter method for retrieving the last name
  this.getLastName = function () {
    return lastName;
  };

  // Getter method for retrieving the full name
  this.getFullName = function () {
    return firstName + " " + lastName;
  };

  // Setter method for updating the first name
  this.setFirstName = function (first) {
    firstName = first;
  };

  // Setter method for updating the last name
  this.setLastName = function (last) {
    lastName = last;
  };

  // Setter method for updating the full name
  this.setFullName = function (firstAndLast) {
    // Split the new full name into first and last names
    fullName = firstAndLast.split(" ");
    firstName = fullName[0];
    lastName = fullName[1];
  };
};

// Example usage
let person = new Person("John Doe");

console.log(person.getFirstName()); // Output: "John"
console.log(person.getLastName()); // Output: "Doe"
console.log(person.getFullName()); // Output: "John Doe"

person.setFirstName("Jane");
console.log(person.getFullName()); // Output: "Jane Doe"

person.setLastName("Smith");
console.log(person.getFullName()); // Output: "Jane Smith"

person.setFullName("Alice Cooper");
console.log(person.getFirstName()); // Output: "Alice"
console.log(person.getLastName()); // Output: "Cooper"

_________________________________________________________________________________________________________
