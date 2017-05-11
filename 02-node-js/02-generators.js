'use strict'

const log = console.log

function* generateNumbers() {
  yield 1
  yield 2
}

function* generateColors() {
  const incomingValue = yield 'yellow'
  log(incomingValue)
  yield* generateNumbers()
  yield 'green'
  yield 'red'
}

const colorsIterator = generateColors()
log(colorsIterator.next())
log(colorsIterator.next('Value from caller'))
log(colorsIterator.next())
log(colorsIterator.next())
log(colorsIterator.next())
log(colorsIterator.next())
