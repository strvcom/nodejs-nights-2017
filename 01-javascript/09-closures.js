'use strict'

const log = console.log

function getAnswerEverythingFunc() {
  const result = 42
  return () => {
    return result
  }
}

const answerEverything = getAnswerEverythingFunc()
log(answerEverything())
