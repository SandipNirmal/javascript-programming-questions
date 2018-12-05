/**
 * Finds average of first n even natural numbers
 * 
 * @param {number}
 * @return {number} average of numbers
 */
function avgOfEvenNaturalNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += 2 * i;
  }

  return sum / n;
}

// Optimised solution
// Sum = n (n + 1)
// avg = sum / n  => (n + 1)

/**
 * Finds average of first n odd natural numbers
 * 
 * @param {number}
 * @return {number} average of numbers
 */
function avgOfOddNaturalNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += (2 * i - 1);
  }

  return sum / n;
}

// Optimised solution
// Sum = n2
// avg = sum / n  => n

console.log('Avg of first n even number', avgOfEvenNaturalNumbers(process.argv[2] || 1));
console.log('Avg of first n odd number', avgOfOddNaturalNumbers(process.argv[2] || 1));
