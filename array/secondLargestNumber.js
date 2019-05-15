/**
 * Function which returns second largest number from given array
 *
 * @param {array} arr
 * 
 * @returns {number}
 */
function find2ndLargestNumber(arr){

  const filteredArr = arr.filter((item, index) => arr.indexOf(item) === index)
  return filteredArr.sort((a, b) => a - b)[filteredArr.length - 2]
}

// One can use Map as well to filter unique items.
