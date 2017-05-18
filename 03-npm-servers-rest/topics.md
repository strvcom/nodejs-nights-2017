# Node.js lecture

## 1. NPM
- <https://www.npmjs.com/>
- to update
  - `npm i npm -g`
- npm CLI vs registry
  - npm CLI - can be used with different registries
  - `npm i expressjs/express`
- yarn vs npm
- `node_modules`
  - always .gitignore
- commands:
  - `npm ls`                        // list installed packages
  - `npm ls -g --depth 0`           // list installed packages
  - `npm ll -g --depth 0`           // more detailed
  - `npm list --depth 0`            // list installed packages first level only
  - `npm search validation`         // search package
  - `npm init`                      // ini
  - `npm install koa@1.4.0`         // specific version
  - `npm install --dry-run koa`     // only shows what will be installed
  - `-S, --save`, `-D, --save-dev`,`-O, --save-optional`
  - `require.resolve('moment')`     // check if installed
  - `npm outdated`                  // check outdated dependencies 
     - `cd /Volumes/STRV/Dev/STRV/strv-nda-webapp`
  - `npm update`                    // update
  - `npm-check -u` package          // good package for updates
  - `npm home`                      // package home page
  - `npm repo`                      // package repository page
  - `npm shrinkwrap`                // fix dependencies

## 2. require and modules
- global/local variables in modules
- phases:
  - resolving
    - paths where node searches
    - relative vs absolute path vs package name
    - require folder & index.js
    - package.json and main
    - require `.json` file
  - loading
  - wrapping
    - `require('module').wrapper`
    - difference exports & module.exports
    - why we cannot assign `exports` but we can `module.exports`
  - evaluating
  - caching

- ES5 vs ES6 differences
  - <http://es6-features.org>
- Detect if used as module - `if (require.main === module)`

## 3. Simple TCP server
- `nc localhost 3000` or `telnet localhost 3000` (CTRL+] & quit to quit)
- is event emitter
- buffer & encoding
  - does not assume anything about encoding
  - write method with string - default 'utf8'
- socket implements DuplexStream interface - read/write
- show how Node exists process
- uuid lib: <https://www.npmjs.com/package/uuid>

## 4. Simple HTTP server
- show Postman
- `curl -X GET localhost:3000`
- `curl -X GET -i localhost:3000`
- `curl -v localhost:3000`
- keep-alive - TCP connection persisted
- transfer-encoding 
  - response is streamed, partial chucked responses
  - node can send chunks when they are ready instead of caching them in memory
- terminating request is obligatory
- show `url` & `querystring` module (<https://nodejs.org/api/url.html#url_url>)
```
require('url').parse('https://www.strv.com/search?query=node')
require('url').format({
  protocol: 'https', 
  host: 'www.strv.com',
  pathname: '/search', 
  search: '?query=node'
})

require('querystring').stringify({ name: 'John Doe', age: 30 })
require('querystring').parse('name=John%20Doe&age=30')
```

## 5. REST API guidelines
- HTTPS always! - explain how it works
  - <https://www.slideshare.net/inovia/20140731-pierre-cornic-https-and-certificates-explained>
- HTTP status codes
  - see `require('http').STATUS_CODES`
  - `{ success: true }`
- plural names
- create documentation
- PUT & PATCH difference
- limit number of results:
  - filtering
  - sorting
  - search
- envelopes
- errors
