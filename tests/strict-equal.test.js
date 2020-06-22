const describe = require('mocha').describe
const it = require('mocha').it
const strictEqual = require('../strict-equal.js')
const assert = require('assert')

describe('Comparison', () => {
  describe('strictEqual', () => {
    it('create a strictEqual function where 5 and "5" return false', () => {
      // setup test data
      var falseData = [5, '5']

      // call the function with the test data
      var outcome1 = strictEqual(falseData)

      // asserts what should be true
      assert.equal(outcome1, false)
    })

    it('create a strictEqual function where "a" and "a" return true', () => {
      // setup test data
      var trueData = ['a', 'a']

      // call the function with the test data
      var outcome2 = strictEqual(trueData)

      // asserts what should be true
      assert.equal(outcome2, true)
    })
  })
})
