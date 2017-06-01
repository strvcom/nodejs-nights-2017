# Docker examples

Various examples of Docker commands.

## List of useful Docker commands

List running docker containers:
```
docker ps
```

List all docker containers:
```
docker ps -a
```

Search image:
```
docker search ubuntu
```

Start bash within ubuntu container (with interactive terminal):
```
docker run -it ubuntu:latest /bin/bash
docker run -it --name myubuntu ubuntu:latest /bin/bash
```

Detach from container:
```
CTRL+P, CTRL+Q
```

Run nginx server (detached mode):
```
docker run -d -p 80:80 --name webserver nginx
```

Stop container:
```
docker stop webserver
```

Start existing container:
```
docker start webserver
```

List docker images:
```
docker images
```

Remove docker image:
```
docker rmi {imageName|imageID}
```

Start bash in running container:
```
docker exec -it {containerName|containerID} /bin/bash
```

List docker IDs:
```
docker ps --no-trunc -aq
```

Run Postgres:
```
docker run -d -p 5432:5432 --name local-postgres postgres
docker run -d -p 5432:5432 --name local-postgres -e PG_USER=postgres -e PG_PASSWORD=password -e DB_NAME=sample-db sameersbn/postgresql
```

Run MySQL:
```
docker run --name db -d -e MYSQL_ROOT_PASSWORD=123 -p 3306:3306 mysql:latest
```

Build custom image:
```
docker build --tag my-image:latest .
```

Remove dangling docker images:
```
docker rmi $(docker images -f "dangling=true" -q)
```

List docker volumes:
```
docker volume ls
```

Remove unused volumens:
```
docker volume prune
```

Run [Portainer](http://portainer.io/) (docker management UI):
```
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock --name portainer portainer/portainer
```

## Links
- [Docker Hub](https://hub.docker.com/)
- [Blog post](https://pavelvanecek.cz/js-docker/)
- [Docker Tips](https://nodesource.com/blog/8-protips-to-start-killing-it-when-dockerizing-node-js/?utm_source=nodeweekly&utm_medium=email)
- [Building image with NodeJS installed](https://www.airpair.com/node.js/posts/getting-started-with-docker-for-the-nodejs-dev)
