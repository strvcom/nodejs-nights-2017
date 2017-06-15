# Tests, coverage, deployment

## 1. Explain project changes
- token verification - algorighms
- kcors - allow headers

## 2. Password hashing
- why
- install `bcrypt`
  - mention windows issues
  - show how `bcrypt` is slow and why

## 3. Sequelize
- define index - `{ unique: true }`

## 4. Tests
- always artificial email addresses
- test runners:
  - [mocha](https://www.npmjs.com/package/mocha)
  - [ava](https://www.npmjs.com/package/ava)
  - [jest](https://www.npmjs.com/package/jest)

- assertion library:
  - `chai`
  - `dirty-chai`
  - `chai-shallow-deep-equal`
  - (`chai-as-promised`)
- put `.eslintrc.js` to the folder
- put `mocha.opts` to the folder
  - [mocha-http-detect](https://www.npmjs.com/package/mocha-http-detect)
- init chai
- add data generator
  - [chance](https://www.npmjs.com/package/chance)
  - [faker](https://www.npmjs.com/package/faker)

- writing unit tests
- writing integration tests
- koa runner:
  - [supertest-koa-agent](https://www.npmjs.com/package/supertest-koa-agent)
  - `before`, `beforeEach` hooks

## 5. Test coverage
- install `nyc`
- create `.nycrc` file

## 6. Mocking with Sinon
- install:
  - [sinon](https://www.npmjs.com/package/sinon)
  - [sinon-chai](https://www.npmjs.com/package/sinon-chai)
- usage:
```
sinon.sandbox.create()
sandbox.stub(users, 'register').callsFake(() => Promise.resolve(fakeResponse))
expect(users.register).to.have.been.calledOnce()
sandbox.restore()
```

## 7. Documentation generating
- Swagger
  - `swagger-ui-dist`
  - `koa-static2`
- defining `swagger.yaml`
- resources:
  - <http://swagger.io/redoc-openapi-powered-documentation/> (used on lecture)
  - <https://github.com/sourcey/spectacle>
  - <https://github.com/jensoleg/swagger-ui>
  - <https://github.com/ostranme/swagger-ui-themes>
  - <https://github.com/legendecas/material-swagger-ui>
  - <https://github.com/lord/slate>
  - <https://github.com/danielgtaylor/aglio>
