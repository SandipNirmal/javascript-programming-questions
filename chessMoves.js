function ChessboardTraveling(str) { 

  // code goes here
  const prbStr = str.split('');
  
  const x = +prbStr[1];
  const y = +prbStr[3];
  const a = +prbStr[6];
  const b = +prbStr[8];

  const horShift = (b - y);
  const verShift = (a - x);

  return factorial(horShift + verShift) / (factorial(verShift) * factorial(horShift));
}

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
