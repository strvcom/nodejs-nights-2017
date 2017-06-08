# docker-compose, Postgres, pg, pg-promise, sequelize, auth

## 1. Docker
- building image
  - show how the image can be built (Dockerfile)
  - `docker build --tag my-image:latest .`
- start postgres
  - `docker run --name local-postgres -p 5432:5432 postgres`
- multicontainer environments
  - show how to write `docker-compose.yml` file
  - `docker-compose up -d --force-recreate`
  - `docker-compose stop`
  - `docker-compose rm`

## 2. Postgres
- database IDEs:
  - <https://eggerapps.at/postico/>
  - <https://www.pgadmin.org/>
  - <https://www.jetbrains.com/datagrip/>
- show how to create table
- create indexes
- basic queries
- 1:n relations, m:n relations
- JSON queries
- resources:
  - <https://www.tutorialspoint.com/postgresql/>
  - <http://tatiyants.com/pev/#/plans/new>

## 3. Connecting from Node (pg-promise)
- install <https://www.npmjs.com/package/pg-promise>

## 4. ORM (sequelize)
- modeling

## 5. Auth tokens
- what is JWT
  - show <https://jwt.io/>
  - accessToken & refresh tokens
- install `jsonwebtoken` package
