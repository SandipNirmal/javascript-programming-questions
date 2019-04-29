/**
 * Find frequency of each number in given array. Also write a method which can
 * search frequency of given number.
 * 
 * @param {array} arr - sorted array
 * @param {number} item
 * 
 * @returns {number}
 */
function findFrequency(arr, item) {
  // const length = arr.length;
  // let index = 0;
  // let nextItem = item
  // let nextItemIndex;

  // TODO: Fix following logic

  const firstIndex = binarySearch(arr, item)

  // while(!nextItemIndex) {
  //   nextItem += 1
  //   nextItemIndex = binarySearch(arr, item)
  // }

  // return nextItemIndex - firstIndex

  return firstIndex - binarySearch(arr, item - 1)
}


/**
 * Binary Search Algorithm
 * 
 * @param {array} arr
 * @param {number} item
 * 
 * @returns {number|boolean}
 */
function binarySearch(arr, item) {
  let min = 0;
  let max = arr.length - 1;

  let searchIndex;

  while (min <= max) {
    searchIndex = Math.abs((min + max) / 2);
    const guess = arr[searchIndex];

    if (guess === item) {
      return searchIndex;
    } else if (guess < item) {
      min += 1;
    } else {
      max -= 1;
    }
  }

  return false;
}
