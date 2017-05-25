# Koa lecture

Repository: <https://github.com/strvcom/nodejs-nights-project>

## 1. Initialize project
- `npm init` project
  - show package.json fields
- install dependencies:
  - `koa` - main framework we will build REST API in

## 2. ESlint
- explain why
- <https://www.npmjs.com/package/eslint-config-airbnb>
- <https://github.com/strvcom/eslint-config-javascript>
- <https://www.npmjs.com/package/babel-eslint>
- `npm install --save-dev eslint@latest @strv/eslint-config-javascript@latest`
- configure `.eslintrc`
- npm run script
- enable in VS code:
```
"eslint.enable": true
"eslint.autoFixOnSave": true
```
- babel parser: <https://www.npmjs.com/package/babel-eslint>

## 3. Koa middleware
- start server
- install bluebird (for Promise.delay)
- show how middleware work
```
app.use((ctx, nextMiddleware) => {
  log.info('First middleware - start')
  console.time('Middleware')
  nextMiddleware()
  console.timeEnd('Middleware')
  log.info('First middleware - end')
})

app.use(async ctx => {
  await Promise.delay(1000)
  ctx.status = 200
  ctx.body = {
    first: 'John',
    last: 'Doe',
  }
})
```

## 4. Nodemon
- <https://www.npmjs.com/package/nodemon>
- `nodemon .`

## 5. Other middleware
- `koa-body`
  - parsing request bodies
  - show `{ multipart: true }` option and its impact
- `koa-compress`
- `kcors`
  - explain same request origin policy
  - needs to be installed with `npm i kcors@next`

## 6. Pug and simple rendering
- install `koa-pug`
- `new KoaPug({ viewPath: path.join(__dirname, 'views') })`

## 7. Logger
- logger:
  - mention structured logging
  - bunyan - <https://www.npmjs.com/package/bunyan>
  - pino - <https://www.npmjs.com/package/pino>

## 8. Router
- install `koa-router` package
- initialize with new
- methods: `get`, `post`, `patch`, `put`, `del`