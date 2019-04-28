function getSubArrayWithSum() {}

function isPerfectSquare(n) {
  let square = false;

  for (let sum = 0, i = 1; sum < n; i + 2) {
    sum += i;
    if (sum === n) {
      square = true;
      break;
    } else if (sum > n) {
      break;
    }
  }

  return square;
}

console.log(isPerfectSquare(36));
