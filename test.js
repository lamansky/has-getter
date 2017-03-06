'use strict'

const assert = require('assert')
const hasGetter = require('.')

class Test {
  get data () {}
  set data2 (value) {}
}

class Test2 extends Test {
}

describe('hasGetter()', function () {
  it('should return true if a class prototype has a getter', function () {
    assert(hasGetter(Test.prototype, 'data'))
  })

  it('should return true if an object has a getter', function () {
    const test = new Test()
    assert(hasGetter(test, 'data'))
  })

  it('should return true if an object has a getter in its inheritance chain', function () {
    const test = new Test2()
    assert(hasGetter(test, 'data'))
  })

  it('should return false if an object does not have a getter', function () {
    const test = new Test()
    assert(!hasGetter(test, 'doesNotExist'))
  })

  it('should return false if an object has a setter but not a getter', function () {
    const test = new Test()
    assert(!hasGetter(test, 'data2'))
  })

  it('should return false if object is null', function () {
    assert(!hasGetter(null))
  })

  it('should return false if object is undefined', function () {
    assert(!hasGetter())
  })
})
