/**
 * Returns string by reversing it using array methods
 * 
 * @param {string} word
 * 
 * @returns {string}
 */
function stringReverse(word) {
  return word.split('').reverse().join('')
}

/**
 * Returns string by reversing it using iteration
 * 
 * @param {string} word
 * 
 * @returns {string}
 */
function reverseByIteration(word) {
  const stringLen = word.length
  let reversedString = ''

  for (let i = stringLen; i >= 0; i--) {
    reversedString += word.charAt(i-1)
  }

  return reversedString
}

/**
 * Returns string by reversing it using recursion
 * 
 * @param {string} word
 * 
 * @returns {string}
 */
function reverseByRecursion(word) {

  function reverse(input) {

    if(input.length < 2) {
      return input
    }

    return reverse(input.substring(1)) + input.charAt(0)
  }

  return reverse(word.substring(1)) + word.charAt(0)
}

console.log(stringReverse('Sony is launching Playstation 5 next Year'))
console.log(reverseByIteration('Sony is launching Playstation 5 next Year'))
console.log(reverseByRecursion('Sony is launching Playstation 5 next Year'))
