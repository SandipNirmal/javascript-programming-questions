/**
 * Returns firt non repeatable character from the given word
 * 
 * @param {string} word
 * 
 * @returns {char}
 */
function firstNonRepeatedChar(word) {
  const chars = {}

  word.split('').forEach((char) => {
    let Char = char.toLowerCase()
    if (Char !== ' ') {
      chars[Char] = chars[Char] ? chars[Char] += 1 : 1
    }
  })

  for (let char in chars) {
    if (chars[char] === 1) return char
  }

  return false
}

console.log(firstNonRepeatedChar('real madrid'))
console.log(firstNonRepeatedChar('Juventus'))
console.log(firstNonRepeatedChar('Manchester United'))
console.log(firstNonRepeatedChar('Christiano Ronaldo'))
