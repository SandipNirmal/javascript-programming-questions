const problemArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 7, 6, 6];

/**
 * Finds duplicates from given array
 *
 * @param {array} arr - problem array
 * @returns {array}
 */
function findDuplicates(arr) {
  const table = {};

  for(let i = 0; i < arr.length; i++) {
    let val = arr[i]; 
    table[val] ? table[val]++ : table[val] = 1;
  }

  return Object.keys(table).filter((val) => {
    return table[val] > 1;
  })
}

console.log(findDuplicates(problemArray));

/**
 * Returns uniques values from given integer array
 * 
 * @param {array} arr
 * 
 * @returns {array}
 */
function getUniqueValues(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })
}

console.log(getUniqueValues(problemArray));

/**
 * Returns duplicates from given array
 *
 * @param {array} arr - problem array
 * @returns {array}
 */
function findDuplicatesInArray(arr) {
  const sortedArr = arr.sort();
  const result = [];

  for (let i = 0; i < sortedArr.length; i++) {
    const val = sortedArr[i];
    if (val === sortedArr[i+1]) {
      result.push(val);
    }
  }

  return result;
}

console.log(findDuplicatesInArray(problemArray));
