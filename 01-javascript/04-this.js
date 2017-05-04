'use strict'

global.name = 'Global'

const log = console.log
const that = this

const killer = {
  name: 'John',
  kill(person, location) {
    log(`I am ${this.name} and I will kill ${person} in ${location}.`)
  },
  shoot: (person, location) => {
    log(`I am ${this.name} and I will kill ${person} in ${location}.`)
    log(that === this)
  }
}

// Standard
// killer.kill('Brian', 'Prague')

// Without context
// const killFunc = killer.kill
// killFunc('Lukas', 'Paris')

// With call
// killer.kill.call({ name: 'Adam' }, 'Jack', 'Berlin')

// With apply
// killer.kill.apply({ name: 'Adam' }, ['Jack', 'Berlin'])

// With bind
// const killBinded = killer.kill.bind({ name: 'Joe' })
// killBinded('David', 'London')

// Arrow function
killer.shoot('Tom', 'Porto')
