const describe = require('mocha').describe
const it = require('mocha').it
const strictEqual = require('../strict-equal.js')
const expect = require('chai').expect

describe('Comparison', () => {
  describe('strictEqual', () => {
    it('create a strictEqual function where 5 and "5" return false', () => {
      // setup test data
      const falseData = [5, '5']

      // call the function with the test data
      const outcome = strictEqual(falseData)

      // assets what should be true
      expect(outcome).to.equal(false)
    })

    it('create a strictEqual function where "a" and "a" return true', () => {
      // setup test data
      const trueData = ['a', 'a']

      // call the function with the test data
      const outcome = strictEqual(trueData)

      // assets what should be true
      expect(outcome).to.equal(true)
    })
  })
})