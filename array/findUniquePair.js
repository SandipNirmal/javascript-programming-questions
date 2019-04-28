/**
 * find count of unique pairs (any order) whose sum exists in given array
 * 
 * e.g. [1, 2, 3, 5]
 * contains 2 pairs
 * {1, 2} => 3
 * {2, 3} => 5
 */

const problem_array = [1, 2, 3, 5];

/**
 * Returns unique pairs whose sum exists in given array
 * 
 * @param {array}
 * @returns {array}
 */
function getUniquePairs(arr) {
  const uniquePairs = [];
  const checkedSums = [];

  for (let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];

      if (!doesExistsIn(sum, checkedSums) && doesExistsIn(sum, arr)) {
        checkedSums.push(sum);
        uniquePairs.push([arr[i], arr[j]])
      }
    }
  }
  return uniquePairs;
}

/**
 * Checks if value exists in passed array
 * 
 * @param {number} value
 * @param {array} arr
 * 
 * @returns {boolean}
 */
function doesExistsIn(value, arr) {
  return arr.some((item) => item === value);
}

console.log(getUniquePairs(problem_array));
console.log(getUniquePairs([1, 5, 6, 4, -1, 5]));
console.log(getUniquePairs([5, 5, 5, 5, 10]));
console.log(getUniquePairs([1, 5, 6, 4, -1, 5, 10]));
