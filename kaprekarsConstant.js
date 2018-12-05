// Kaprekars Constant

/**
 * Returns number of turns required to get number to 6174
 * 
 * @param {number} num
 * @returns {number}
 */
function getTurnsForKaprekarsConstant(num) {
  const KaprekarsConstant = 6174;
  let turns = 0;

  // console.log(typeof num);
  // if (typeof num !== "number") return 'Function accepts only number!';

  if (+num > 9999) {
    return 'Only 4 digit number accepted!'
  }

  while (num !== KaprekarsConstant) {
    // while (turns <= 5) {
    num = '' + num;
    console.log(num);

    num = num.split('');
    console.log(num);

    const len = num.length;

    if (len < 4) {
      for (var i = 0; i < 4 - len; i++) {
        num.unshift(0);
      }
    }

    const highest = +getHighestValue(num);
    const lowest = +getLowestValue(num);

    console.log(`Highest ${highest}, Lowest ${lowest}`);
    num = highest - lowest;

    turns++;
    console.log('Diff', num);
  }

  return turns;
}

/**
 * Returns highest value by join array values after sorting it in descending
 * 
 * @param {array} arr
 */
function getHighestValue(arr) {
  return arr.sort((a, b) => b - a).join('')
}

/**
 * Returns lowest value by join array values after sorting it in ascending
 * 
 * @param {array} arr
 */
function getLowestValue(arr) {
  return arr.sort((a, b) => a - b).join('')
}

console.log('Turns required', getTurnsForKaprekarsConstant(process.argv[2]));
