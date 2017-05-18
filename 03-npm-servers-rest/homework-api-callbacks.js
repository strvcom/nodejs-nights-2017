'use strict';

const request = require('request');

const lukeUrl = 'http://swapi.co/api/people/1'
const log = {
  info: console.log,
  error: console.error,
}

function call(uri, callback) {
  request({ uri, json: true }, (err, data, body) => {
    if (err) {
      return callback(err)
    }

    callback(null, body)
  })
}

function getVehicles(personUrl, callback) {
  call(personUrl, (err, person) => {

    if (err) {
      return callback(err)
    }

    // No vehicles --> return empty array
    let count = person.vehicles.length
    if (count === 0) {
      return callback(null, [])
    }

    // Count requests, the last one will return the final result
    const vehicles = []
    const errors = []
    person.vehicles.forEach(vehicleUrl => {
      call(vehicleUrl, (innerErr, vehicle) => {

        // Write requests results
        if (innerErr) {
          errors.push(innerErr)
        } else {
          vehicles.push(vehicle)
        }

        // Check if this requests is the last one
        count--
        if (count === 0) {

          // Construct result error if any
          if (errors.length !== 0) {
            const resultErr = new Error('Cannot get all vehicles.')
            resultErr.innerErrors = errors
            return callback(resultErr)
          }

          // Everything OK
          callback(null, vehicles)
        }
      })
    })
  })
}

getVehicles(lukeUrl, (err, vehicles) => {
  if (err) {
    return log.error(err)
  }

  log.info('Results:', vehicles.map(vehicle => vehicle.name))
})
