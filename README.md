
# Node.js Nights Course

This repository contains source code and other resources created during Node.js Nights course.

## List of packages:

### REST API

| Library | Desciption |
|-|-|
| [koa][npm-koa] | Main framework for building REST APIs. |
| [koa-body][npm-koa-body] | Koa middleware for parsing request bodies. |
| [kcors][npm-kcors] | Koa middleware which allows dei. |
| [koa-compose][npm-koa-compose] | Koa helper to compose multiple middleware into one. |
| [koa-router][npm-koa-router] | Koa package for REST API routes defining.
| [koa-static2][npm-koa-static2] | Package for static files serving. |
| [koa-compress][npm-koa-compress] | Koa package for request/response compression. |
| [express][npm-express] | Koa framework alternative. |
| [hapi][npm-hapi] | Koa framework alternative. |

[npm-express]: https://npmjs.com/package/express
[npm-hapi]: https://npmjs.com/package/hapi
[npm-kcors]: https://npmjs.com/package/kcors
[npm-koa-body]: https://npmjs.com/package/koa-body
[npm-koa-compose]: https://npmjs.com/package/koa-compose
[npm-koa-compress]: https://npmjs.com/package/koa-compress
[npm-koa-router]: https://npmjs.com/package/koa-router
[npm-koa-static2]: https://npmjs.com/package/koa-static2
[npm-koa]: https://npmjs.com/package/koa

### Data validation

| Library | Desciption |
|-|-|
| [joi][npm-joi] | Popular validation library. |
| [ajv][npm-ajv] | Claimed to be the fastest validation library, uses JSON schema. |
| [jsonschema][npm-jsonschema] | Another validation library which uses JSON schema. |

[npm-ajv]: https://npmjs.com/package/ajv
[npm-joi]: https://npmjs.com/package/joi
[npm-jsonschema]: https://www.npmjs.com/package/jsonschema

### Logging

| Library | Desciption |
|-|-|
| [bunyan][npm-bunyan] | Very popular logging library, it allows sending logs to multiple outputs. |
| [pino][npm-pino] | A logging library with the same API as bunyan. They claim that it is much faster than other logging libraries. |

[npm-bunyan]: https://npmjs.com/package/bunyan
[npm-pino]: https://npmjs.com/package/pino

### Authorization & hashing

| Library | Desciption |
|-|-|
| [jsonwebtoken][npm-jsonwebtoken] | Library generating JSON web tokens. |
| [bcrypt][npm-bcrypt] | Most popular library for password hahing. |

[npm-bcrypt]: https://npmjs.com/package/bcrypt
[npm-jsonwebtoken]: https://npmjs.com/package/jsonwebtoken

### Databases

| Library | Desciption |
|-|-|
| [pg][npm-pg] | Client for Postgres database. |
| [pg-promise][npm-pg-promise] | `pg` package wrapper adding Promise interface. |
| [sequelize][npm-sequelize] | Very popular ORM for Postgres, MySql and other SQL databases. |
| [objection][npm-objection] | Alternative to `sequelize` package. |

[npm-objection]: https://npmjs.com/package/objection
[npm-pg-promise]: https://npmjs.com/package/pg-promise
[npm-pg]: https://npmjs.com/package/pg
[npm-sequelize]: https://npmjs.com/package/sequelize

### Tests

| Library | Desciption |
|-|-|
| [mocha][npm-mocha] | Favorite test runner. |
| [mocha-http-detect][npm-mocha-http-detect] | Mocha addon to detect whether tests are not sending request to external systems. |
| [chai][npm-chai] | Probably the most favorite assertion library. |
| [dirty-chai][npm-dirty-chai] | Library which converts chai property access assertions to method calls. |
| [chai-as-promised][npm-chai-as-promised] | Chai addon adding Promise assertions. |
| [chai-shallow-deep-equal][npm-chai-shallow-deep-equal] | Chai addon adding assertion for shalow comparison of two objects keys and values. |
| [tape][npm-tape] | Another tests runner, mocha alternative. |
| [jest][npm-jest] | Tests runner from Facebook, very popular on frontend but it can be used on backend too. |
| [ava][npm-ava] | Another tests runner, mocha alternative. |
| [sinon][npm-sinon] | Popular mocking library. |
| [sinon-chai][npm-sinon-chai] | Chai addon adding assertions on sinon stubs. |
| [supertest-koa-agent][npm-supertest-koa-agent] | Package that can start Koa app instance and send requests to it. |
| [chance][npm-chance] | Package for fake data generating. |
| [faker][npm-faker] | Package for fake data generating. |

[npm-ava]: https://npmjs.com/package/ava
[npm-chai-as-promised]: https://npmjs.com/package/chai-as-promised
[npm-chai-shallow-deep-equal]: https://npmjs.com/package/chai-shallow-deep-equal
[npm-chai]: https://npmjs.com/package/chai
[npm-chance]: https://npmjs.com/package/chance
[npm-dirty-chai]: https://npmjs.com/package/dirty-chai
[npm-faker]: https://npmjs.com/package/faker
[npm-jest]: https://npmjs.com/package/jest
[npm-mocha-http-detect]: https://npmjs.com/package/mocha-http-detect
[npm-mocha]: https://npmjs.com/package/mocha
[npm-sinon-chai]: https://npmjs.com/package/sinon-chai
[npm-sinon]: https://npmjs.com/package/sinon
[npm-supertest-koa-agent]: https://npmjs.com/package/supertest-koa-agent
[npm-tape]: https://npmjs.com/package/tape

### Tests coverage

| Library | Desciption |
|-|-|
| [istanbul][npm-istanbul] | Tests coverage generator. |
| [nyc][npm-nyc] | Istanbul's wrapper. |

[npm-istanbul]: https://npmjs.com/package/istanbul
[npm-nyc]: https://npmjs.com/package/nyc

### Server monitoring

| Library | Desciption |
|-|-|
| [newrelic][npm-newrelic] | Nice easy-to-use package that monitors server performance and errors. |

[npm-newrelic]: https://npmjs.com/package/newrelic

### Queues

| Library | Desciption |
|-|-|
| [bull][npm-bull] | Easy-to-use package for queues (uses Redis). |
| [amqplib][npm-amqplib] | RabbitMQ queue client. |

[npm-amqplib]: https://npmjs.com/package/amqplib
[npm-bull]: https://npmjs.com/package/bull

### Image resizing

| Library | Desciption |
|-|-|
| [sharp][npm-sharp] | Nice package for image resizing. |

[npm-sharp]: https://npmjs.com/package/sharp

### Sending emails

| Library | Desciption |
|-|-|
| [nodemailer][npm-nodemailer] | Supports all kinds of email providers. |
| [sendgrid-mailer][npm-sendgrid-mailer] | Sendgrid client, wrapper of the `sendgrid` package. |

[npm-nodemailer]: https://npmjs.com/package/nodemailer
[npm-sendgrid-mailer]: https://npmjs.com/package/sendgrid-mailer

### Other

| Library | Desciption |
|-|-|
| [uuid][npm-uuid] | Unique identifier generator. |
| [lodash][npm-lodash] | Package with all kinds of utilities on JavaScript objects and collections. |
| [request][npm-request] | Allows sending HTTP requests. |
| [request-promise][npm-request-promise] | Wrapper of the `request` package adding Promise interface. |
| [twilio][npm-twilio] | Twilio client, allows sending SMS. |
| [iap][npm-iap] | In-app purchases validation. |
| [bluebird][npm-bluebird] | Promise implementation. Requires less memory than native Promise, adds bunch of useful methods. |
| [xml2js][npm-xml2js] | Package for generating and parsing XML data (if you really have to). |
| [cheerio][npm-cheerio] | Package for web scraping. |
| [dotenv][npm-dotenv] | Package allowing loading configuration of process.env variables from `.env` file. |
| [moment][npm-moment] | Date manipulation. |
| [nodestream][npm-nodestream] | File uploads/downloads. |
| [randomstring][npm-randomstring] | Random string generator. |
| [shortid][npm-shortid] | Short ID generator. |

[npm-bluebird]: https://npmjs.com/package/bluebird
[npm-cheerio]: https://npmjs.com/package/cheerio
[npm-dotenv]: https://npmjs.com/package/dotenv
[npm-iap]: https://npmjs.com/package/iap
[npm-lodash]: https://npmjs.com/package/lodash
[npm-moment]: https://npmjs.com/package/moment
[npm-nodestream]: https://npmjs.com/package/nodestream
[npm-randomstring]: https://npmjs.com/package/randomstring
[npm-request-promise]: https://npmjs.com/package/request-promise
[npm-request]: https://npmjs.com/package/request
[npm-shortid]: https://npmjs.com/package/shortid
[npm-twilio]: https://npmjs.com/package/twilio
[npm-uuid]: https://npmjs.com/package/uuid
[npm-xml2js]: https://npmjs.com/package/xml2js

## Other resources:
- [Node school](https://nodeschool.io/)
- [GraphQL](http://graphql.org/learn/)
- [Apollo stack](https://www.apollodata.com/)
- [Docker](http://docker.com/)
- [Node news](http://nodeweekly.com/)
