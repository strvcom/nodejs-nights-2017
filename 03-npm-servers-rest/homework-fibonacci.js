'use strict'

function* fibonacci(count) {
  if (typeof count !== 'number') {
    throw new Error('Invalid count argument.')
  }

  let prev = 0
  let current = 1

  for (let i = 0; i < count; i++) {
    yield current

    // Move
    const originalPrev = prev
    prev = current
    current = originalPrev + current
  }
}

for (const item of fibonacci(10)) {
  console.log(item)
}
