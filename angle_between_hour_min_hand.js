/**
 * Returns angle between the hour hand and minute hand of the clock
 * 
 * Hour hand moves 0.5 degrees in 1 min
 * Min hand moves 6 degrees in 1 min
 * 
 * @param {number} hour
 * @param {number} min
 * @param {number}
 */
function angleBetweenHourAndMinHand(hour, min) {
  if (hour < 0 || hour > 12) {
    return 'Invalid hour value!';
  }

  if (min < 0 || min > 60) {
    return 'Invalid min value!';
  }

  const M = 6;   // angle travelled by min hand in 1 min
  const H = 0.5;   // angle travelled by hour hand in 1 min

  hour = (hour === 12) ? 0 : hour;
  min = (min === 60) ? 0 : min;

  const diff =  Math.abs(((hour * 60 + min) * H) - (min * M));

  return Math.min(diff, 360-diff);
}

console.log('angle at 11:45', angleBetweenHourAndMinHand(11, 45));
console.log('angle at 12:15', angleBetweenHourAndMinHand(12, 15));
console.log('angle at 10:30', angleBetweenHourAndMinHand(10, 30));
console.log('angle at 8:40', angleBetweenHourAndMinHand(8, 40));
console.log('angle at 12:40', angleBetweenHourAndMinHand(12, 40));
