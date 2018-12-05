/**
 * Function to find the missing number in a given integer array of 1 to 100
 * 
 * @returns {number}
 */
function findMissingNumber(n, array) {
  return SumOfFirstnNumbers(n) - getArraySum(array)
}

function SumOfFirstnNumbers(n) {
  return n * ((n + 1) / 2)
}

function getArraySum (arr) {
  let sum = 0
  arr.forEach((item) => sum += item)
  return sum
}

// test
console.log(findMissingNumber(10, [1, 2, 3, 4, 5, 6, 7, 9, 10]))  // 8
console.log(findMissingNumber(10, [1, 2, 3, 4, 6, 7, 8, 9, 10]))  // 5
console.log(findMissingNumber(10, [1, 2, 3, 4, 5, 6, 8, 9, 10]))  // 7
console.log(findMissingNumber(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // nothing missing
