'use strict';

const request = require('request-promise');

const lukeUrl = 'http://swapi.co/api/people/1'
const log = {
  info: console.log,
  error: console.error,
}

function getVehicles(personUrl) {
  return request({ uri: personUrl, json: true })
    .then(person => Promise.all(
      person.vehicles.map(vehicle => request({ uri: vehicle, json: true })))
    )
}

function run() {
  getVehicles(lukeUrl)
    .then(vehicles => {
      const vehicleNames = vehicles.map(vehicle => vehicle.name)
      log.info('Results:', vehicleNames)
    })
    .catch(err => {
      log.error(error)
    })
}

run()
