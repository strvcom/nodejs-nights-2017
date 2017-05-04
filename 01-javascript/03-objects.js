'use strict'

const log = console.log

// Create a new object
const adam = new Object()
const brian = {}

adam.first = 'Adam'
adam.last = 'Smith'

const key = 'age'
const john = {
  first: 'John',
  last: 'Doe',
  [key]: 50,
  address: {
    street: 'Rohanske',
  },
  sayHello() {
    log('Hello World')
  }
}

// Delete property from object
delete john.first
Reflect.deleteProperty(john, 'last')

log(john)

// Clone object
const adamClone = Object.assign({}, adam)
log(adamClone)

// Define enumerable property
Object.defineProperty(adamClone, 'isClone', {
  value: true,
  enumerable: true,
  writable: true,
  configurable: true,
})

log(adamClone)

for (const key in adamClone) {
  log(key)
}
