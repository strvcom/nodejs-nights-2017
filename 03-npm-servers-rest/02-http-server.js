'use strict'

const http = require('http')
const url = require('url')

const port = 3000
const log = {
  info: console.log,
  error: console.error,
}

const server = http.createServer()
server.on('request', (req, res) => {
  log.info('Incoming request', req.headers, req.url)
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  //res.end('Hello from HTTP server.\n')

  res.write('First\n')
  setTimeout(() => res.write('Second\n'), 1000)
  setTimeout(() => res.write('Third\n'), 2000)
  setTimeout(() => res.end('End.\n'), 3000)
})

//server.timeout = 1000
server.listen(port, server => {
  log.info(`Server up and running on port ${port}.`)
})
