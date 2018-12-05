/**
 * Smallest window that contains all characters of string itself.
 * 
 * e.g. 
 * Input  : aabcbcdbca
 * Output : dcba
 * Explanation : 
 * dbca of length 4 is the smallest 
 * window with highest number of distinct
 * characters.         
 *
 * Input : aaab
 * Output : ab
 * Explanation : 
 * ab of length 2 is the smallest window 
 * with highest number of distinct characters.
 */

function factorial(num) { 
  return (num === 0) ? 1 : num * factorial(num - 1);
}

console.log(FirstFactorial(6));
