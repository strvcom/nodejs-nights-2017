# 3. Lecture summary

Topics covered:
- NPM
- TCP server
- HTTP server
- REST API guidlelines

[Details of discussed topics can be found here](topics.md)  
[Slides from the lecture](https://docs.google.com/a/strv.com/presentation/d/1JlkZUztqhOxXxhyypeoJQ_Ufz6kQ3oY4xy0oTcahczA/edit?usp=sharing)

## Homework

### Create a simple chat server

The server should fulfill these requirements:
- ask the user for a name when they connect for the first time
- say welcome message when the user enters the name
- listen to messages sent by all clients
- send a received message to all clients but not self
- unregister client when the client disconnects
