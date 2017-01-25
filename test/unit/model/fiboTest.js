const expect = require('chai').expect;
const checkFibo = require('../helpers.js').checkFibo;
const recursiveFibo   = require('../../../fibonacci/recursiveFibonacci.js');

describe( 'CheckFibo: Check the sequence', () => {
  it( 'should return true or false', () => expect(checkFibo([1,1,2,3,5,8])).to.equal(true) );
  it( 'should return true or false', () => expect(checkFibo([1,4,9,5,6,8])).to.equal(false) );
})

describe( 'A fibonacci sequence function \n', () => {
  describe( 'expects to generate a fibonacci sequence', () => {
    it( 'should return an array', () => expect(recursiveFibo(2)).to.be.a('array') );
    it( 'should return an array with lenght equal to the lenght passed', () => expect(recursiveFibo(15)).to.have.lengthOf(15) );
    it( 'should return a sequence where each subsequent value is equal to the sum of the two previous values', () => expect(checkFibo(recursiveFibo(30))).to.equal(true) );
  })
})