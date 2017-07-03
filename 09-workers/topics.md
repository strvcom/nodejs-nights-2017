# Workers

## 1. Setup queue
- setup Redis in docker-compose
```
redis:
  image: redis
  container_name: bookmarks-app-redis
  ports:
  - 6379:6379
```
- install [bull](https://www.npmjs.com/package/bull)

## 2. Welcome email worker
- send email worker
  - setup Sendgrid account - Heroku
  - [sendgrid](https://www.npmjs.com/package/sendgrid)
  - [sendgrid-mailer](https://www.npmjs.com/package/sendgrid-mailer)

## 3. Resize image worker
- [sharp](https://www.npmjs.com/package/sharp)

## 4. Scraping worker
- [cheerio](https://www.npmjs.com/package/sharp)

## 5. GraphQL
- [Apollo](https://www.apollodata.com/)
- [GraphQL playground](https://github.com/jzavisek/graphql-playground)
- [Slides](https://docs.google.com/presentation/d/1KTtCi6RuE7gtFSJQwSLpZGf-o7ripOPSd2zzTRgW6kM/edit#slide=id.g1454bd7dba_0_68)
