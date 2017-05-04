'use strict'

const log = console.log

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

log(arr.push(9)) // --> returns items count, modifies original
log(arr)

log(arr.pop()) // --> returns last inserted item, modifies original
log(arr)

log(arr.shift()) // --> returns first item, modifies original
log(arr)

log(arr.unshift(20)) // --> inserts first item, modifies original
log(arr)

log(arr.filter(item => item % 2 === 0)) // --> returns new array, does not modify original
log(arr)

log(arr.map(item => item * 2)) // --> returns new array, does not modify original
log(arr)

log(arr.reduce((prev, current) => {
  return prev + current
}, 0)) // --> returns new array, does not modify original
log(arr)

log(arr.slice(3, 5)) // (startIndex, endIndex) --> returns new array, does not modify original
log(arr)

log(arr.splice(3, 2, 'hi', 'hello', 'bye')) // (startIndex, deleteCount, ...replacements) --> modifies original
log(arr)

log(arr.splice(3, 0, 'world')) // inserts item to the position 3
log(arr)

log(arr.includes(20))   // true, when item is included
log(arr.every(item => item % 2 === 0)) // true, if every item matches condition

const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.get('a')
log(map)

const set = new Set()
set.add('a')
set.add('b')
set.add('a')
log(set)