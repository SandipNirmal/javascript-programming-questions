/**
 * Function which returns second largest number from given array
 *
 * @param {array} arr
 * 
 * @returns {number}
 */
function find2ndLargestNumber(arr) {
  const filteredArr = arr.filter((item, index) => arr.indexOf(item) === index)
  return filteredArr.length > 1
			? filteredArr.sort((a, b) => a -b )[filteredArr.length - 2]
			: filteredArr[0]
}

find2ndLargestNumber([1, 2, 3, 4, 5, 4, 5]) // 4
find2ndLargestNumber([1, 2]) // 1
find2ndLargestNumber([1, 2, 3, 4, 6, 7, 5, 3, 8, 9, 1, 2, 9, 8, 8, 9]) // 8

// One can use Map as well to filter unique items.
