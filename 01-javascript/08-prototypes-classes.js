'use strict'

const log = console.log

class Killer {
  kill(person) {}
}

class ShootingKiller extends Killer {
  shoot(person) {}
}

const john = new ShootingKiller()

log(Object.getPrototypeOf(john) === ShootingKiller.prototype)
log(Object.getPrototypeOf(ShootingKiller.prototype) === Killer.prototype)
log(Object.getPrototypeOf(Killer.prototype) === Object.prototype)

log(Object.getPrototypeOf(ShootingKiller) === Killer)
log(Object.getPrototypeOf(Killer) === Function.prototype)
log(Object.getPrototypeOf(Function.prototype) === Object.prototype)

log(Object.getOwnPropertyNames(Killer.prototype))
log(Object.getOwnPropertyNames(ShootingKiller.prototype))
