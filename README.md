# Kaizen API

This is the kaizen API backend written using NodeJS

## Requirements

- [Docker](https://www.docker.com/)
- [DockerCompose](https://docs.docker.com/compose/)

## Dev Deployment

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Production Deployment

In the project root directory, add the following files:

- db_user.txt = contains database username
- db_password.txt = contains database password

```bash
docker-compose up --build
```
