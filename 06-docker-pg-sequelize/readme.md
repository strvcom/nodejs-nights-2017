# 6. Lecture summary

Topics covered:
- configuring local environment with `docker-compose`
- validation fix
- using `pg`, `pg-promise` to query data from the database
- `seuelize` ORM - creating models, code-first database modeling
- auth - access token generating

[Details of discussed topics can be found here](topics.md)  
[Slides from the lecture](https://docs.google.com/a/strv.com/presentation/d/1JlkZUztqhOxXxhyypeoJQ_Ufz6kQ3oY4xy0oTcahczA/edit?usp=sharing)  
[Project repository](https://github.com/strvcom/nodejs-nights-project)  

## Homework

### 1. Write user registration endpoint
You can start with the code that we created during lectures or your own. In this homework you should finish the user registration endpoint which should behave according the following rules:
1. It shou validate data and return 400 validation error when the input is incorrect (this part is already done)
2. It should check whether user with the same email already exists in the database:
   a) If yes, return 409 Conflict error with type `Users.Conflict` and reasonable message
   b) If no, do the following:
      - create a new record of the user in the database
      - create an access token for that user
      - send the access token in the response `Authorization` header (use koa set method to do this - `ctx.set`)
      - send the user profile in the response body

Note: You don't need to care about password hashing right now. We will show that in the next lecture.

### 2. Learn Postgres if you don't know it already
Resources:
- <https://pgexercises.com>
- <https://www.tutorialspoint.com/postgresql/>
