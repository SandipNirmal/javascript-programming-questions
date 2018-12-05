
/**
 * Finds duplicate characters in given string. Returns false if there is no
 * duplicates.
 * 
 * @param {String} input - problem string
 * @returns {boolean | object}
 */
function findDuplicateCharacter (input) {
  const chars = {}
  let duplicateExists = false

  input.split('').forEach((char) => {
    if (char !== ' ') {
      if(chars[char.toLowerCase()]) {
        chars[char.toLowerCase()]++
        duplicateExists = true
      } else chars[char.toLowerCase()] = 1
    }
  })

  return duplicateExists ? chars : false
}

// Test
console.log(findDuplicateCharacter('baba'))
console.log(findDuplicateCharacter('abcdefghijkl'))
console.log(findDuplicateCharacter('juventus'))
console.log(findDuplicateCharacter('real madrid'))
console.log(findDuplicateCharacter('Manchester United'))
