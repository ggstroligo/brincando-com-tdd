const nFiboNumber = (n) => {
  if (n < 2) return 1; 
  else return nFiboNumber(n-2) + nFiboNumber(n-1);
} 

const fibonacci = (n) => {
  let sequence = [];
  for (let i = 0; i < n; i++)    sequence.push(nFiboNumber(i));
  return sequence;
}

module.exports = fibonacci