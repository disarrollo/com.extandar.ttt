# How to use this project with Docker

## Development Enviroment

### Build
docker build -f Dockerfile.dev -t ttt-deezer-nuxt .
docker build --no-cache -f Dockerfile.dev -t ttt-deezer-nuxt .

### Run
Default docker command
docker run -p 3001:3000 -v /app/node_modules -v /app/.nuxt -v $(pwd):/app ttt-deezer-nuxt

With console
docker run -it -p 3001:3000 -v /app/node_modules -v /app/.nuxt -v $(pwd):/app ttt-deezer-nuxt sh

## Production

## Build
docker build --no-cache -f Dockerfile.production-from-dev -t ttt-deezer-nuxt_production .

## Deploy
docker run ttt-deezer-nuxt_production

## Deploy continuously
docker run -it -v /app/node_modules -v $(pwd):/app ttt-deezer-nuxt_production sh
sh deploy_production.sh