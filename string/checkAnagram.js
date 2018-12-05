/**
 * Checks if passed arguments are anagram or not
 * 
 * @param {string} word
 * @param {string} anagram
 * 
 * @returns {boolean}
 */
function isAnagram(word, anagram) {
  word = word.toLowerCase().split('').sort().join('')
  anagram = anagram.toLowerCase().split('').sort().join('')

  return word === anagram
}

// Test
console.log(isAnagram('word', 'drow'))
console.log(isAnagram('mary', 'army'))
console.log(isAnagram('marry', 'army'))
