'use strict'

const log = console.log

const parent = {
  name: 'Parent',
}

const child = Object.create(parent, {
  age: {
    value: 20,
    enumerable: true,
  },
})

// Investigating prototype chain
log(parent.__proto__)
log(parent.__proto__ === Object.prototype)
log(Object.getOwnPropertyNames(Object.prototype))
log(Object.getPrototypeOf(parent) === Object.prototype)
log(Object.getPrototypeOf(child) === parent)

log(child.name)

for (const key in child) {
  if (child.hasOwnProperty(key)) {
    log('Property', key)
  }
}
