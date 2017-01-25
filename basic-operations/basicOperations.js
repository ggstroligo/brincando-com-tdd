const sum = (a,b) => a+b;
const mult = (a,b) => (!b) ? 0 : sum( a, mult(a, b-1) );
const div = (a,b) => a/b;
const exp = (a,b) => Math.pow(a,b);

module.exports = {
  sum:  sum,
  mult: mult, 
  div:  div,
  exp:  exp,
}
