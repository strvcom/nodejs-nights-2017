'use strict'

const TIMEOUT = 2000
const log = console.log

// ------ Callback style ------------------------------------------------------

/*

// Simulating request to external API
function callRemoteService(url, callback) {
  setTimeout(() => {
    callback(null, `${url}: 42`)
  }, TIMEOUT)
}

function retrieveData() {
  callRemoteService('api.google.com', (err, data) => {
    log(data)
    callRemoteService('api.aws.com', (err2, data2) => {
      log(data2)
      callRemoteService('api.azure.com', (err3, data3) => {
        log(data3)
      })
    })
  })
}

retrieveData()

*/

// ------ Promise style -------------------------------------------------------

/*

// Simulating request to external API
function callRemoteService(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${url}: 42`)
    }, TIMEOUT)
  })
}

function retrieveData() {
  callRemoteService('api.google.com')
    .then(data => {
      log(data)
      return callRemoteService('api.aws.com')
    })
    .then(data => {
      log(data)
      return callRemoteService('api.azure.com')
    })
    .then(data => {
      log(data)
    })
    .catch(err => {
      console.error(err, 'Cannot call external service.')
    })
}

retrieveData()

*/

// ------ Async await style ---------------------------------------------------

// Simulating request to external API
function callRemoteService(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${url}: 42`)
    }, TIMEOUT)
  })
}

async function retrieveData() {
  try {
    const data = await callRemoteService('api.google.com')
    log(data)
    const data2 = await callRemoteService('api.aws.com')
    log(data2)
    const data3 = await callRemoteService('api.azure.com')
    log(data3)
  } catch (err) {
    console.error(err, 'Cannot call external service.')
  }
}

retrieveData()
