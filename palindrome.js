/**
 * Checks and return if passed value is palindrome or not
 * @param {*} val
 * @returns {boolean}
 */
function checkPalindrome(val) {
  return val.split('').reverse().join('') === val;
}

console.log(checkPalindrome('nitin'));
console.log(checkPalindrome('val'));
console.log(checkPalindrome('12344321'));
