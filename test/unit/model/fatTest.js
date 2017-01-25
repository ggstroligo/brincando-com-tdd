const expect = require('chai').expect;
const fat = require('../../../factorial/recursiveFactorial.js');

describe( 'Fatorial function', () => {
  describe('Expect to return the result of multiplying a sequence of descending natural numbers down to 1', () => {
    it( '5! should return 120', () => expect(fat(5)).to.equal(120) );
    it( '10! should return 3628800', () => expect(fat(10)).to.equal(3628800) );
  })
})