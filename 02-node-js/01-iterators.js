'use strict'

/*
Iterator interface: 
{ 
  next: --> {
    done: true/false, 
    value: ... 
  }
}
 */

const arr = [1, 2, 3, 4, 5]
const log = console.log

function getIterator() {
  let index = 0
  return {
    next: () => {
      if (index < arr.length) {
        const currentValue = arr[index]
        index++
        return { done: false, value: currentValue }
      }

      return { done: true }
    }
  }
}

const iterableObject = {
  [Symbol.iterator]: getIterator,
}

// Iterating manually
const createIterator = iterableObject[Symbol.iterator]
const iterator = createIterator()
iterator.next()
iterator.next()
iterator.next()

// Iterating with for .. of loop
for (const item of iterableObject) {
  log(item)
}
