'use strict';

const request = require('request-promise');

const lukeUrl = 'http://swapi.co/api/people/1'
const log = {
  info: console.log,
  error: console.error,
}

async function getVehicles(personUrl) {
  const person = await request({ uri: personUrl, json: true })
  const vehicles = await Promise.all(person.vehicles
    .map(vehicle => request({ uri: vehicle, json: true })))
  
  return vehicles
}

async function run() {
  try {
    const vehicles = await getVehicles(lukeUrl)
    const vehicleNames = vehicles.map(vehicle => vehicle.name)
    log.info('Results:', vehicleNames)
  } catch (error) {
    log.error(error)
  }
}

run()
