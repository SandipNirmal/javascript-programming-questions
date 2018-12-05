/**
 * Find valid words in given string. Assuming you have dictiory of words to
 * check if word is valid or not.
 * 
 * e.g. 
 * 
 * JavaScript Developer
 * 
 * has
 * 
 * Java, Script, JavaScript, Developer
 * 
 * as valid words
 */
const problem_string = "Full Stack JavaScript Developer with Node, Angular and React skills.";

/**
 * Returns valid words from passed string
 * 
 * @param {String} problemStr
 * @param {boolean} isSubStr
 * 
 * @return {array} returns all valid words
 */
function getValidWordsFromString(problemStr = '', isSubStr = false) {
  const strToChars = problemStr.split('');
  let word = '';
  const validWords = [];

  for (let char of strToChars) {
    if (char === ' ') {
      word = '';
      if (isSubStr) {
        break;
      } else {
        continue;
      }
    }

    word += char;

    if (dictionary.isValid(word)) {
      validWords.push(word);
      validWords.push(...getValidWordsFromString(problemStr.slice(word.length, problemStr.length), true))
    }
  }

  return validWords;
}

/**
 * Assume we have dictionary of valid words
 */
const dictionary = {
  validWords: ['java', 'script', 'javascript', 'developer', 'angular', 'react', 'node'],
  isValid: (str) => {
    return dictionary.validWords.some((word) => word.toLowerCase() === str.toLowerCase())
  }
}

console.log(getValidWordsFromString(problem_string));
