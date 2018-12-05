/**
 * Checks array of numbers and add appropriate operators to get final sum to
 * be 0
 * 
 * @param {array} arr - array of sorted numbers
 * @return {string}
 */
function placeOperators(arr) {
  const remainder = arr.length % 4;
  let result = [];

  if (remainder !== 0 || remainder !== 3) {
    return 'Operation cannot produce result 0';
  }

  for (let i = 0; i < 4; i+4 ) {
    const temp = `${arr[i]} - ${arr[i+1]} - ${arr[i+2]} + ${arr[i+3]}`;
    
  }
}