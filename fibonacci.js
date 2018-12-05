/**
 * Prints fibnocci series till given number
 */
function fibnocciSeries(n) {
  const result  = [];
  
  for (let i = 0; i < n; i++) {
    result.push(fibnocci(i));
  }

  return result;
}

function fibnocci(n) {
  let a = 1,
    b = 0,
    temp;

  while (n >= 0) {
    temp = a;
    a += b;
    b = temp;
    n--;
  }

  return b;
}

console.log(fibnocciSeries(10));
