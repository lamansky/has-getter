'use strict'

const getPropertyDescriptor = require('get-property-descriptor')

module.exports = function hasGetter (object, propName) {
  const desc = getPropertyDescriptor(object, propName)
  return desc && typeof desc.get === 'function'
}
