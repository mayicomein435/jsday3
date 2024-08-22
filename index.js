// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
(function(arr) {
    const oddNumbers = arr.filter(function(num) {
        return num % 2 !== 0;
    });
    console.log(oddNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Convert all the strings to title caps in a string array
(function(arr) {
    const titleCaps = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCaps);
})(["hello", "world", "javascript", "functions"]);

// Sum of all numbers in an array
(function(arr) {
    const sum = arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// Return all the prime numbers in an array
(function(arr) {
    const isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const primes = arr.filter(isPrime);
    console.log(primes);
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Return all the palindromes in an array
(function(arr) {
    const isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    const palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
})(["madam", "racecar", "hello", "world"]);

// Return median of two sorted arrays of the same size.
(function(arr1, arr2) {
    const mergeAndSort = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = mergeAndSort.length / 2;
    const median = (mergeAndSort[mid - 1] + mergeAndSort[mid]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);

// Remove duplicates from an array
(function(arr) {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);

// Rotate an array by k times
(function(arr, k) {
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);



// Do the below programs in arrow functions.
// Print odd numbers in an array
const printOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Convert all the strings to title caps in a string array
const toTitleCaps = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCaps(["hello", "world", "javascript", "functions"]));

// Sum of all numbers in an array
const sumOfNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// Return all the prime numbers in an array
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const getPrimes = (arr) => arr.filter(isPrime);
console.log(getPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Return all the palindromes in an array
const isPalindrome = (str) => str === str.split('').reverse().join('');
const getPalindromes = (arr) => arr.filter(isPalindrome);
console.log(getPalindromes(["madam", "racecar", "hello", "world"]));
