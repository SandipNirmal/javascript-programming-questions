/**
 * Returns searched index for item searching for
 *
 * @param {array} arr - sorted array
 * @param {any} item - item to search
 *
 * @returns {boolean|any}
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
