'use strict'

const log = console.log

function Killer() {
  this.name = 'Killer'
}

const KillerProto = {
  kill(person) {
    console.log(`${this.name} is killing ${person}.`)
  }
}

Killer.prototype = KillerProto

const john = new Killer()

log(john.name)
log(Object.getPrototypeOf(Killer) === Function.prototype)
log(Object.getOwnPropertyNames(Function.prototype))
log(Object.getPrototypeOf(john) === KillerProto)
log(Object.getOwnPropertyNames(Object.getPrototypeOf(john)))
log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(john))))
