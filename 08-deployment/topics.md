# Deployment

## 1. Heroku introduction
- show what are pipelines
  - descibe stages
  - promote to production
  - should always go through beta
- Heroku builds a container and runs container
- Amazon & Heroku relation
- describe tabs
  - resources (addons)
  - deploy
  - metrics
  - activity
    - Roll back to here
- deployment methods - Heroku GIT, Github
- DNS configuration
- define `Procfile`
  - web process - has to bind to a specific port within 60 seconds

- buildpacks
  - <https://elements.heroku.com>
  - `buildpacks` file

- Heroku CLI
  - <https://devcenter.heroku.com/articles/heroku-cli#macos>
  - `heroku run bash --app nodejs-nights-project`

## 2. Heroku GIT auto-deployment
- create Heroku account
- define `Procfile`
- add environment variables
- setup addons
  - Postgres
- setup autodeployment from Github

## 3. Travis CI
- Travis CI .org, .com
- define `.travis.yml`
- configure build Heroku to wait of the build
- configure Travis to do deployment

## 4. New relic
- configure newrelic

## 5. Circle CI
- define `circle.yml`
- show deployment via Circle CI
