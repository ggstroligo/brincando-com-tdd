const expect = require('chai').expect;
const ops    = require('../../../basic-operations/basicOperations.js')
const sum    = ops.sum;
const mult   = ops.mult;
const div    = ops.div;
const exp    = ops.exp;

describe( 'sum()', () => {
  describe('expect to return the sum of two numbers', () => {
    it( 'sum of 2 + 3 should return '+(2+3), () => expect(sum(2,3)).to.equal(2+3) )
    it( 'sum of 10 + 20 should return '+(10+20), () => expect(sum(10,20)).to.equal(10+20) )
  })
});

describe( 'mult()', () => {
  describe('expect to return the multiplication of two numbers', () => {
    it( 'mult of 2 * 3 should return '+2*3, () => expect(mult(2,3)).to.equal(2*3) )
    it( 'mult of 10 * 20 should return '+10*20, () => expect(mult(10,20)).to.equal(10*20) )
  })
});

describe( 'div()', () => {
  describe('expect to return the division of two numbers', () => {
    it( 'div of 6 / 2 should return '+(6/2), () => expect(div(6,2)).to.equal(6/2) )
    it( 'div of 8 / 4 should return '+(8/4), () => expect(div(8,4)).to.equal(8/4) )
  })
});

describe( 'exp()', () => {
  describe('expect to return the exponential of two numbers', () => {
    it( 'exp of 3 on 5 should return '+Math.pow(3,5), () => expect(exp(3,5)).to.equal(Math.pow(3,5)) )
    it( 'exp of 2 on 3 should return '+Math.pow(2,3), () => expect(exp(2,3)).to.equal(Math.pow(2,3)) )
  })
});