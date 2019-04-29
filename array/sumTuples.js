/**
 * Find all the unique pair from given array, which sums
 * up to make passed value
 * 
 * Space Complexity - O(n)
 *
 * @param {array} arr - problem array
 * @param {number} sum - sum to match
 *
 * @param {array}
 */
function findTuples(arr, sum) {
  const map = {};
  const result = [];

  arr.forEach(item => {
    if (map[item]) {
      result.push([map[item], item]);
    } else {
      // Store difference between sum and current number as a key for map
      map[sum - item] = item;
    }
  });

  return result;
}
