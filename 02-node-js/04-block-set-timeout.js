'use strict'

// setTimeout - timeout is minimum time to execute

const log = console.log

const sayHelloDelayed = () => {
  setTimeout(() => {
    log('Hello from timeout.')
  }, 1000)
}

const slowAdd = (a, b) => {
  for (let i = 0; i < 999999999; i++) {}
  return a + b
}

// timeout will be executed with delay
sayHelloDelayed()

// block JS runtime
const a = slowAdd(1, 1)
log(a)
const b = slowAdd(2, 2)
log(b)
