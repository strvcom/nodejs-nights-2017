
# 2. Lecture summary

Topics covered:
- Finishing JavaScript - iterators, generators (see [JavaScript topics](./../01-javascript/topics.md))
- Node.js architecture and basic constructs (see [Node.js topics](./topics.md))
- [Slides from the lecture](https://docs.google.com/a/strv.com/presentation/d/1JlkZUztqhOxXxhyypeoJQ_Ufz6kQ3oY4xy0oTcahczA/edit?usp=sharing)

## Homework

### 1. Watch the video about event looop
<https://www.youtube.com/watch?v=8aGhZQkoFbQ>

### 2. Generator
Create a generator generating numbers from Fibonacci sequence. Generator should generate as many numbers as consumer needs.
Fibonacci sequence is: 1, 1, 2, 3, 5, 8, 13, ...

Mathematically defined:
```
A[0] = 1
A[1] = 1
A[i] = A[i - 2] + A[i - 1]
```

### 3. Use async constructs (callbacks, promises, async await)

*Summary:*  
Get names of all vehicles owned by Luke Skywalker. Use Starwars API to retrieve data (<http://swapi.co>).

Try to do that both with callbacks, promises and async await:
- use [request package](https://github.com/request/request) for making requests using callbacks
- use [request-promise package](https://www.npmjs.com/package/request-promise) for making requests using Promises and `async await`
- use `npm install` command to get them

*Flow:*
1. Make a request to retrieve Luke Skywalker (`GET http://swapi.co/api/people/1`)
2. You will retrieve Luke detail with `vehicles` array
3. Then retrieve all vehicles by making requests to vehicle URL (e.g. `GET http://swapi.co/api/vehicles/14`)
4. Use `map` function to retrieve vehicles names and dump them to console

You can send your solution to `josef.zavisek@strv.com`.
