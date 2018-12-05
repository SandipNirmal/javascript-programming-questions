/**
 * Returns timings when the min and hour hand of the clock superimpose
 * 
 * In 1 min hour hand traverse 0.5 degrees
 * In 1 min min hand travese 6 degrees
 * 
 * angle covered by clock hands
 * 
 * // Hour hand
 * 0.5 * (60*H + M)
 * 
 * // Min hand
 * 6 * M
 * 
 * i.e. 6M = 0.5 * (60 * H  + M);
 * M = 60/11 H;
 */
(function getClockOverlap() {
  console.log('Clock hands will superimpose at:');
  for(let i = 0; i < 12; i++) {
    console.log(`${i}:${Math.round((60/11) * i * 100) / 100}`);
  }
})();
