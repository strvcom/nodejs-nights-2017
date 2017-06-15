# 7. Lecture summary

Topics covered:
- hashing passwords with bcrypt
- mocha tests
- nyc code coverage
- doc generating (swagger)

[Details of discussed topics can be found here](topics.md)  
[Slides from the lecture](https://docs.google.com/a/strv.com/presentation/d/1JlkZUztqhOxXxhyypeoJQ_Ufz6kQ3oY4xy0oTcahczA/edit?usp=sharing)  
[Project repository](https://github.com/strvcom/nodejs-nights-project)  

## Homework

### 1. Write user login endpoint

- Write `POST /sessions` endpoint which accepts body like this:
```
{
  "email": "john@example.com",
  "password": "VerySecretStuff"
}
```

- It should lookup the user in the database and verify password using `auth.comparePassword` method.
- If it succeeds it should respond with 201 status, user profile in the body a the token in the `Authorization` header (the same as with registration).
- If it fails it should respond with 401 Unauthorized error.

### 2. Write 2 integration tests of your endpoint
- The first one should verify success path.
- The second one should verify failure path.
