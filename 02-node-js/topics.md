# Node.js lecture

## 1. Node.js Architecture
- words: non-blocking, event-driven, I/O
  - I/O
    - communication between process and hardware (disk, network card)
    - process communicates with signals or messages
    - I - received by the process, O - sent out by the process
    - largest waste of resources

- handling slow I/O operations:
  - synchronously (blocking)
  - fork() new process
  - threads
    - Apache - thread per request
  - event loop
    - Nginx - single threaded
    - advantages
      - parallel programming is hard
      - no context switching

- parallel vs asynchronous
  - libuv - <https://github.com/libuv/libuv>

- architecture
  - v8 and relation to Node.js
  - largest waste of resources is waiting for I/O

- callstack, eventloop, Node.js API and queue
  - mention `setTimeout`
  - callstack
    - only one thing at a time can run
  - event loop
    - started automatically by node
    - monitors stack and queue
  - Node.js API (C++)
    - posix threads that we can make calls to - SIGNALS
    - timers, emitters, wrappers around OS operations 

- explain `setTimout`, `setImmediate` & `process.nextTick`
  - `setTimeout` - time not guaranteed
  - `setImmediate` - preferred
  - `process.nextTick()` - carefully

- when is Node.js suitable and when not

- homework: <https://www.youtube.com/watch?v=8aGhZQkoFbQ>
- loupe: http://latentflip.com/loupe

## 2. Async constructs
- callbacks & callback hell
  - converting them to promises (with default callback param)
- Promises
- `async await`

## 3. Process object
- `process.versions`
- `process.env`
  - do not read directly
  - change name - only change in config
- `process.release.lts`
- `process` is an event emitter:
  - .on('exit', code => {})                 // only sync ops can be performed here
  - .on('uncaughtException', err => {})     // node will not exit
  - .once('uncaughtException', err => {})   // difference between once and on
  - `process.stdin.resume()`

- exit process - when and how
  - `process.exit()`

## 4. Event emitter
- can react to the same signal multiple times by defining multiple listeners (hook points)
- show demo
- methods:
  - `addListener`
  - `on`
  - `once`
  - `removeListener`
  - `error`
  - `uncaughtException` - error of any kind of emitter can bubble to event loop
