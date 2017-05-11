'use strict'

const fs = require('fs')
const Promise = require('bluebird')

async function readAllLines(file) {
  const data = await Promise.fromCallback(cb => fs.readFile(file, cb))
  const lines = data.toString().trim().split('\n')
  return lines
}

async function run() {
  const lines = await readAllLines(__filename)
  lines.forEach((line, index) => {
    console.log(`${index}: ${line}`)
  })
}

run()
