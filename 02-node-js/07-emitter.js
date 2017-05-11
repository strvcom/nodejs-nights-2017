'use strict'

const EventEmitter = require('events')
const log = {
  info: console.log,
  error: console.error,
}

class TaskProcessor extends EventEmitter {

  run(task) {

    // error is a special event
    // this.emit('error', new Error('Something went teribly wrong.'))

    log.info('Before task execution.')
    this.emit('begin')
    task()
    this.emit('end')
    log.info('After task execution.')
  }

}

// Create instance
const taskProcessor = new TaskProcessor()

// Add listeners
taskProcessor.addListener('begin', () => {

  // Simulate blocking
  // for (let i = 0; i < 999999999; i++) {}

  log.info('Starting execution (from listener).')
})

taskProcessor.addListener('end', () => log.info('Execution completed (from listener).'))
taskProcessor.on('begin', () => log.info('Starting execution (from listener registered with on).'))

// Add & remove listener
const customListener = () => log.info('From custom listener.')
taskProcessor.on('begin', customListener)
taskProcessor.removeListener('begin', customListener)

// Error listener
taskProcessor.on('error', err => {
  log.error(err, 'Unhandler error occurred.')
})

// Process is emitter as well
// process.on('uncaughtException', err => {
//   log.error(err, 'Unhandler exeption triggered.')
//   process.exit(1)
// })

// Execute
taskProcessor.run(() => log.info('Executing task 1.'))
taskProcessor.run(() => log.info('Executing task 2.'))
