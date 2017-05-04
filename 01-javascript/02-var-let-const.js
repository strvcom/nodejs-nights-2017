'use strict'

// var, const, let

const log = console.log

function say(greeting) {

  if (!greeting) {
    const name = 'John'

    // This will throw an error
    name = 'Adam'
  }

  //log(name)
}

say()

// Object constant reference
const person = {
  firstName: 'John',
  lastName: 'Doe',
}

person.firstName = 'Brian'
Object.freeze(person)
person.firstName = 'Adam'
